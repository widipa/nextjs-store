'use client';

import {useChat} from 'ai/react';
import styles from './Chat.module.sass';
import {SanitizeHTML} from '../shared/SanitizeHTML/SanitizeHTML';

export const Chat = (props: { agent: string }) => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
            {
                id: '1',
                role: 'system',
                content: props.agent
            }
        ],
    });

    return (
        <main className={styles.Chat} >
            <h1 className={styles.Chat__title}>¿En qué puedo ayudarte?</h1>
            <form onSubmit={handleSubmit} className={styles.Chat__form}>
                <input
                    className={styles.Chat__input}
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Escríbeme aquí"
                />
                <button
                    className={styles.Chat__button}
                >
                    Send
                </button>
            </form>
            <section className={styles.Chat__messages}>
                {messages
                    .filter(m => m.role !== 'system')
                    .map(m => {
                            return (
                                <span key={m.id} className={styles.Chat__message}>
                <div className={styles.Chat__message__icon}>
                  {m.role === "assistant" ? "🤖" : "😊"}
                </div>
                <div className={styles.Chat__message__content}>
                  <SanitizeHTML className={styles.Chat__message__html}>
                    {m.content}
                  </SanitizeHTML>
                </div>
              </span>
                            )
                        }

                    )}
            </section>
        </main>
    );
}

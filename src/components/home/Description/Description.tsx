"use client"

import {useState} from "react";
import styles from './Description.module.sass';
import Image from "next/image";
import classNames from 'classnames/bind';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAApACkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAwQFBgEC/8QAHxAAAgIDAQEBAQEAAAAAAAAAAAEDBAIREjEFISJR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQMEAAL/xAAbEQACAwEBAQAAAAAAAAAAAAAAAQIDESESMf/aAAwDAQACEQMRAD8AwjwZ2PB7G8oz1DFvIpqlprIBK8TaCyRPkoVK+0vwPNX/AI8F2LouLwytvDTFNFb6MfLZN5HwliC1pUyaCV2ukT8p1/oSvOuvSerhQ36RqqWtIZn1wyTSspJfozNZTw9DJ6SyWMj/AFdbZIH/AKUu2yZ0FHSkIOw2FhnexFBovTqaw1EnL6XqtlpejWdlvH0lVvEMvwnT6MsQC1L0xToLP6AKYrhI3jP/2Q==';

export const Description = () => {

    const [hasBorder, setBorder] = useState(false);
    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    });

    return (
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image src="/images/description.jpeg"
                           alt="products marketplace"
                           fill
                           placeholder='blur'
                           blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>

                <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear.
                    Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}
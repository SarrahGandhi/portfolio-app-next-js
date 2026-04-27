import { useEffect, useRef } from 'react';
import styles from './ArrowAnimation.module.css';

const ArrowAnimation = () => {
    const arrow1Ref = useRef<SVGPathElement>(null);
    const arrow2Ref = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (arrow1Ref.current && arrow2Ref.current) {
            const path1Length = arrow1Ref.current.getTotalLength();
            const path2Length = arrow2Ref.current.getTotalLength();
            
            arrow1Ref.current.style.setProperty('--path-length', path1Length.toString());
            arrow2Ref.current.style.setProperty('--path-length', path2Length.toString());
        }
    }, []);

    return (
        <svg
            id="banner-arrow-svg"
            width="220"
            height="65"
            viewBox="0 0 376 111"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`absolute bottom-10 left-8 md:left-12 z-0 pointer-events-none ${styles.arrowSvg}`}
        >
            <path
                className={styles.arrowPath}
                d="M1 1V39.9286L188 110V70.6822L1 1Z"
                stroke="#2C2C2C"
                ref={arrow1Ref}
            />
            <path
                className={styles.arrowPath}
                d="M375 1V39.9286L188 110V70.6822L375 1Z"
                stroke="#2C2C2C"
                ref={arrow2Ref}
            />
        </svg>
    );
};

export default ArrowAnimation;

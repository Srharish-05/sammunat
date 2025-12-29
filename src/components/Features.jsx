import React from 'react';
import styles from '../styles/Features.module.css';

const FeatureCard = ({ title, description, icon }) => (
    <div className={styles.card}>
        <div className={styles.iconWrapper}>
            {icon}
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            title: "Real-time Sync",
            description: "Collaborate with your team in real-time. Changes sync instantly across all devices so everyone stays on the same page.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Automated Workflows",
            description: "Trigger actions based on code events. Deployments, tests, and notifications happen automatically without manual intervention.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
            )
        },
        {
            title: "Data-Driven Insights",
            description: "Gain visibility into your development cycle. Track velocity, identify bottlenecks, and optimize your team's performance.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            )
        }
    ];

    return (
        <section id="features" className={`section ${styles.features}`}>
            <div className="container">
                <div className="text-center mb-8">
                    <h2 className={styles.heading}>Why choose Sammunat?</h2>
                    <p className={styles.subheading}>Everything you need to scale your engineering.</p>
                </div>
                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

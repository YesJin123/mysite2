import React from "react";
import '../../assets/style/components/aboutMe/AboutMe.css';
import useAboutMe from '../../hooks/aboutMe/useAboutMe';

const AboutMe = () => {
    const {
        isDarkMode,
        toggleDarkMode,
        profileInfo,
        education,
        skills,
        interests
    } = useAboutMe();

    return (
        <div className={`introduce-container ${isDarkMode ? 'dark' : ''}`}>
            <div className="theme-toggle">
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
                </button>
            </div>
            <section className="profile-section">
                <div className="profile-image">
                    <div className="image-placeholder"></div>
                </div>
                <div className="profile-info">
                    <h2>{profileInfo.name}</h2>
                    <p className="profile-title">{profileInfo.tilte}</p>
                    <p className="profile-description">
                        안녕하세요! 저는 근명고 재학생입니다.
                        하고 싶은 것을 잘 하며 사는 것이 제 목표입니다.
                        음악 감상과 연주를 좋아하며,
                        특히 미디에 관심이 많습니다.
                    </p>
                    <p className="profile-description">
                        학원에서 배운 지식을 바탕으로 여러 개의 프로토타입을 제작하여 경험을 쌓고 있습니다.
                        다양한 코드 연주를 통해 음악에 맞는 코드 이해와 박자감을 키우고 있습니다.
                    </p>
                    <div className="contact-info">
                        <p><strong>이메일:</strong> {profileInfo.email}</p>
                        <p><strong>위치:</strong> {profileInfo.location}</p>
                    </div>
                </div>
            </section>
            <section className="education-section">
                <h2>교육</h2>
                <div className="education-list">
                    {education.map(item => (
                        <div className="education-item" key={item.id}>
                            <div className="education-period">{item.period}</div>
                            <div className="education-details">
                                <h3>{item.school}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section">
                    <h2>기술 스택</h2>
                    <div className="skills-list">
                        {skills.map(skill => (
                            <div className="skill-item" key={skill.id}>
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: `${skill.level}%`}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
            </section>

            <section className="interests-section">
                        <h2>관심 분야</h2>
                        <div className="interests-list">
                            {interests.map(interest => (
                                <div className="interest-item" key={interest.id}>
                                    <h3>{interest.title}</h3>
                                    <p>{interest.description}</p>
                                </div>
                            ))}
                        </div>
            </section>
        </div>
    );
}

export default AboutMe;
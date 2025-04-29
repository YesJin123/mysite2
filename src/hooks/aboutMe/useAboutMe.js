import { useState, useEffect, useMemo } from 'react';

function useAboutMe() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [profileInfo, setProfileInfo] = useState({
        name: "우예진",
        title: "돈 많은 백수 지망생",
        email: "dnwls2514@naver.com",
        location: "안양시 만안구"
    });

    const education = useMemo(() => [
        {
            id: 1,
            school: "근명 고등학교",
            period:"2023 - 현재",
            description: "앱서비스 특성화 전공"
        },
        {
            id: 2,
            school: "박달 중학교",
            period: "2020 - 2022",
            description: "캘리그라피 활동"
        }
    ], []);

    const skills = useMemo(() => [
        { id: 1, name: "HTML", level: 90},
        { id: 2, name: "CSS", level: 85},
        { id: 3, name: "JavaScript", level: 80},
        { id: 4, name: "React", level: 75},
        { id: 5, name: "UI/UX Design", level: 70},
    ], []);

    const interests = useMemo(() => [
        {
            id: 1,
            title: "웹 개발",
            description: "반응형 웹사이트 및 웹 애플리케이션 개발"
        },
        {
            id: 2,
            title: "UI/UX 디자인",
            description: "사용자 중심의 직관적인 인터페이스 설계"
        },
        {
            id: 3,
            title: "프론트엔드 프레임워크",
            description: "React, Vue 등의 최신 프레임워크 학습"
        }
    ], [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const updateProfileInfo = (newInfo) => {
        setProfileInfo({...profileInfo, ... newInfo});
    };

    return {
        isDarkMode,
        toggleDarkMode,
        profileInfo,
        updateProfileInfo,
        education,
        skills,
        interests
    };
}

export default useAboutMe;
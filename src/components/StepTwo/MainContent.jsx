import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProgressSteps from "./ProgressSteps";
import ResumeBuilder from "./ResumeComponents/ResumeBuilder";

const MainContent = () => {

  const profileData = {
    name: "ماهينور مهاب",
    location: "الاسكندرية , مصر",
    phone: "+962 67652551",
    email: "mahymohabm20@gmail.com",
    initials: "م م",
    summary: "Experienced software developer with a passion for building scalable applications.",
    education: {
      institution: "University of Example",
      period: "2015 - 2019",
      location: "Example City",
      specialization: "Computer Science",
    },
    experience: {
      title: "Software Engineer",
      company: "Tech Company",
      period: "2019 - Present",
      responsibilities: [
        "استكشاف البيانات وتحليلها: يقومون بتحليل البيانات الاستكشافي لكشف الرؤى والاتجاهات والأنماط في البيانات، وغالبًا ما يستخدمون تقنيات إحصائية وتصوري",
        "Collaborating with cross-functional teams",
        "Maintaining code quality",
      ],
    },
  };


  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
     <ProfileCard 
        name={profileData.name}
        location={profileData.location}
        phone={profileData.phone}
        email={profileData.email}
        initials={profileData.initials}
        summary={profileData.summary}
        education={profileData.education}
        experience={profileData.experience}
      />
    <div className="flex flex-col">
        <ProgressSteps />
        <ResumeBuilder />
      </div>
    </main>
  );
};

export default MainContent;

import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CTAButton from '../Components/core/HomePage/Button';
import HighlightText from '../Components/core/HomePage/HighlightText';
import CodeBlocks from '../Components/core/HomePage/CodeBlocks';
import TimelineSection from '../Components/core/HomePage/TimelineSection';
import banner2 from '../assets/Images/banner2.mp4'
// import ManageCoursesSection from '../Components/core/HomePage/ManageCoursesSection';
import ExploreMore from '../Components/core/HomePage/ExploreMore';
import { useDispatch } from 'react-redux';
import { setProgress } from "../slices/loadingBarSlice";
import { getInstructorPageData } from '../services/operations/pageAndComponentData';
import CourseSlider from '../Components/core/Catalog/CourseSlider';
import RatingSlider from '../Components/core/Ratings/RatingSlider';

function InstructorHome() {
    const [InstructorPageData, setInstructorPageData] = useState(null);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchInstructorPageData = async () => {
    //         const result = await getInstructorPageData(dispatch);
    //         setInstructorPageData(result);
    //     };
    //     fetchInstructorPageData();
    // }, [dispatch]);

    return (
        <div>
            <div className='mx-auto relative flex flex-col w-11/12 items-center justify-between text-white'>
                <Link onClick={() => { dispatch(setProgress(100)) }} to={"/create-course"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold transition-all duration-200 hover:scale-95 w-fit max-w-maxContent'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            
                            <p>Create Your First Course</p><FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-center text-3xl md:text-4xl font-semibold mt-7'>
                    Transform Learning with <HighlightText text={"Your Expertise"} />
                </div>
                <div className='mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300'>
                    Share your knowledge and connect with learners globally through our platform. Create courses, interact with students, and make an impact in the education ecosystem.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/create-course"}>
                        Get Started
                    </CTAButton>
                    <CTAButton active={false} linkto={"/instructor-demo"}>Take a Demo</CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-blue-200 w-11/12 relative'>
                    <div className='grad2 -top-10 w-[800px]'></div>
                    <video className='video' muted loop autoPlay>
                        <source src={banner2} type="video/mp4" />
                    </video>
                </div>

                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className='font-semibold text-2xl lg:text-4xl sm:w-full'>
                                Create Impactful
                                <HighlightText text={"Courses Effortlessly"} />
                            </div>
                        }
                        subheading={
                            "Our platform provides all the tools you need to design, publish, and manage your courses effectively. Empower learners with high-quality content."
                        }
                        ctabtn1={{
                            btnText: "Start Now",
                            linkto: "/create-course",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            linkto: "/instructor-demo",
                            active: false,
                        }}
                        codeblock={`<div>Create a Course</div><div>Manage Enrollments</div><div>Track Progress</div>`}
                        codeColor={"white"}
                        backgroudGradient={"grad"}
                    />
                </div>

                {InstructorPageData?.popularCourses?.length > 0 && (
                    <div className='mx-auto box-content w-full max-w-maxContentTab py-12 lg:max-w-maxContent'>
                        <h2 className='section_heading mb-6 md:text-3xl text-xl'>
                            Popular Courses by Instructors
                        </h2>
                        <CourseSlider Courses={InstructorPageData.popularCourses} />
                    </div>
                )}

                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Engage with
                                <HighlightText text={"Learners Effectively"} />
                            </div>
                        }
                        subheading={
                            "Interact with your students through Q&A, live sessions, and feedback mechanisms. Build a community and create an impactful learning experience."
                        }
                        ctabtn1={{
                            btnText: "Host a Session",
                            linkto: "/live-session",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            linkto: "/instructor-demo",
                            active: false,
                        }}
                        codeblock={`<div>Q&A Forums</div><div>Live Classes</div><div>Feedback Tools</div>`}
                        codeColor={"text-yellow-25"}
                        backgroudGradient={"grad2"}
                    />
                </div>

                <ExploreMore />
            </div>

            <div className='hidden lg:block lg:h-[200px]'></div>

            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white'>
                            <CTAButton active={true} linkto={"/catalog/Instructor Resources"}>
                                <div className='flex items-center gap-3'>
                                    Explore Resources
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>Learn More</div>
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                    <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                        <div className='text-4xl font-semibold w-[45%]'>
                            Build Your Career with
                            <HighlightText text={"Our Platform"} />
                        </div>

                        <div className='flex flex-col gap-10 w-[40%] items-start'>
                            <div className='text-[16px]'>
                                Join a network of educators making a difference in the lives of learners worldwide. Share your expertise and grow your professional journey.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>Learn More</div>
                            </CTAButton>
                        </div>
                    </div>

                    <TimelineSection />
                </div>
            </div>

            <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
                {/* <ManageCoursesSection /> */}

                <div className='mb-16 mt-3'>
                    <h2 className='text-center text-2xl md:text-4xl font-semibold mt-8 text-richblack-5 mb-5'>
                        Feedback from Instructors
                    </h2>
                    <RatingSlider />
                </div>
            </div>
        </div>
    );
}

export default InstructorHome;

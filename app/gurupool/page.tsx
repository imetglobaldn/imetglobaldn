import React from 'react'
import Image from 'next/image'
import { contactData, gurupool } from '@/constants'
import { FaLinkedin } from 'react-icons/fa';
import Banner from '@/components/Banner'
import Link from 'next/link'

const page = () => {
    const contactInfomation = contactData.find(item => item.title === "Gurupool");
    return (
        <main>
            {/* Main section */}
            <Banner
                title={contactInfomation ? contactInfomation.title : "Gurupool"}
                description={contactInfomation ? contactInfomation.description : ""}
            />

            {/* Member section */}
            <div className="py-12 bg-[#E5A632]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {gurupool.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:scale-110 transition ease-in hover:shadow-[7px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex flex-col items-left">
                                    {/* Member Image */}
                                    <div className="mb-4">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            width={1200}
                                            height={100}
                                            className="rounded-2xl border-2 border-[#E5A632]"
                                        />
                                    </div>
                                    {/* Member Info */}
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center justify-between mb-6'>

                                        <h3 className="text-xl font-bold text-red font-bricolage ">{member.name}</h3>
                                        <Link href={member.linkedinUrl} passHref>
                                            <div className="my-4 text-[#0073B1] px-4 rounded hover:bg-blue-700 flex items-center">
                                                <FaLinkedin className="mr-2 scale-[200%]" />
                                                {/* LinkedIn */}
                                            </div>
                                        </Link>
                                        </div>
                                        <p className="text-sm text-black font-bricolage">{member.title}</p>
                                        
                                        
                                    </div> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
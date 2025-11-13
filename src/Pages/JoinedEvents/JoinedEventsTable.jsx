import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const JoinedEventsTable = () => {
    const { isDark } = useContext(ThemeContext);

    const events = [
        {
            id: 1,
            title: "Digital Bangladesh Summit 2026",
            description: "Transforming traditional businesses into digital enterprises with cutting-edge technology",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "15, Mar - 2026",
            location: "Dhaka, Bangladesh",
            type: "Seminar",
            attendees: "200+ People registered",
            buttonText: "Buy Ticket Now"
        },
        {
            id: 2,
            title: "Startup Dhaka Innovation Workshop",
            description: "Hands-on workshop for aspiring entrepreneurs and startup founders",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "22, Apr - 2026",
            location: "Bangladesh ICT Incubator",
            type: "Workshop",
            attendees: "150+ People registered",
            buttonText: "Buy Ticket Now"
        },
        {
            id: 3,
            title: "Fintech Revolution Webinar",
            description: "Exploring the future of digital payments and financial technology in Bangladesh",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "08, May - 2026",
            location: "Online Event",
            type: "Webinar",
            attendees: "300+ People registered",
            buttonText: "Join Free"
        },
        {
            id: 4,
            title: "RMG Industry 4.0 Conference",
            description: "Modernizing ready-made garments sector with automation and AI integration",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "18, Jun - 2026",
            location: "Chittagong, Bangladesh",
            type: "Conference",
            attendees: "180+ People registered",
            buttonText: "Buy Ticket Now"
        },
        {
            id: 5,
            title: "AgriTech Farmers Meetup",
            description: "Connecting farmers with technology solutions for sustainable agriculture",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "05, Jul - 2026",
            location: "Rajshahi, Bangladesh",
            type: "Offline",
            attendees: "250+ People registered",
            buttonText: "Register Now"
        },
        {
            id: 6,
            title: "Bangladesh E-commerce Expo",
            description: "Largest gathering of e-commerce entrepreneurs and digital marketers",
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?_gl=1*1kji8jo*_ga*ODIyMzk2ODEwLjE3NjE0NzExODU.*_ga_8JE65Q40S6*czE3NjI5NzYwMzgkbzUkZzEkdDE3NjI5NzYwNzIkajI2JGwwJGgw",
            date: "12, Aug - 2026",
            location: "Dhaka, Bangladesh",
            type: "Exhibition",
            attendees: "400+ People registered",
            buttonText: "Get Pass"
        }
    ];
    return (
        <section>
            <div className='max-w-[1300px] mx-auto py-20 px-4'>
                <div className="overflow-x-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <p className={`text-base-content text-2xl font-cursive ${isDark ? "text-gray-400" : "text-gray-600"}`} >Events you joined</p>
                        <h1 className="text-4xl font-bold mb-4">Joined Events</h1>

                    </div>

                    <table className="table rounded-sm">
                        {/* head */}
                        <thead className={`bg-base-content text-base-100  [&_th]:font-normal`} >
                            <tr>
                                <th className='min-w-10'>Id</th>
                                <th className='min-w-60!'>Date & Location</th>
                                <th className='min-w-60!'>Title & Category</th>
                                <th>Fee</th>
                            </tr>
                        </thead>
                        <tbody className={`${isDark ? "bg-[#fbb4fd54] [&_p]:text-white" : "bg-purple-50 [&_p]:text-gray-600"}`}>
                            {/* row 1 */}

                            {
                                events.map(event => {
                                    return <tr key={event.id}>
                                        <th>
                                            <label>
                                                {event.id}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={event.image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{event.date}</div>
                                                    <div className="text-sm opacity-50">{event.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {event.title}
                                            <br />
                                            <span className={`badge badge-ghost badge-sm bg-base-content text-base-100`} >{event.type}</span>
                                        </td>
                                        <td>Free</td>
                                    </tr>
                                })
                            }
                        </tbody>
                        {/* foot */}
                        {/* <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot> */}
                    </table>
                </div>
            </div>
        </section>
    );
};

export default JoinedEventsTable;
import React from 'react';

const BookingRow = ({ booking }) => {
    const { username, email, description, image, price, duration, availability, _id } = booking;
    return (
        <tr>
            <th>
                <button className="btn btn-circle btn-sm btn-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl w-24">
                            <img
                                src={image}
                                alt="Service image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{availability}</div>
                        <div className="text-sm opacity-50">{_id}</div>
                    </div>
                </div>
            </td>
            <td>
                {username}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">confirm</button>
            </th>
        </tr>
    );
};

export default BookingRow;
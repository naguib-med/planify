import { FC } from 'react';

const AppointmentCard: FC<{ date: string; time: string }> = ({ date, time }) => {
    return (
        <div className="bg-card p-4 rounded-lg shadow-md flex justify-between items-center gap-4">
            <div>
                <h3 className="text-lg font-semibold">{date}</h3>
                <p className="text-gray-500">{time}</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">Annuler</button>
        </div>
    );
}

export default AppointmentCard;
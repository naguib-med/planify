import { FC } from 'react';
import AppointmentCard from "@/components/AppointmentCard";

const AppointmentsList: FC<{ appointments: Array<{ id: string; date: string; time: string }> }> = ({ appointments }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {appointments.length > 0 ? (
                appointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} date={appointment.date} time={appointment.time} />
                ))
            ) : (
                <p className="text-gray-500">Aucun rendez-vous à venir.</p>
            )}
        </div>
    );
};

export default AppointmentsList;

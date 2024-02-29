import EditForm from '@/components/EditForm';
import { notFound } from 'next/navigation';

export default function editPage({
    params: { id },
}: {
    params: { id: string };
}) {
    //fetch note details
    const note = {
        _id: '1',
        content:
            'Lorem re error fugit incidunt enim. Laborum vel nesciunt repellat nulla inventore ipsum. Rem amet reiciendis veritatis libero.',
        createdAt: new Date().toLocaleDateString(),
        color: { _id: '2', hex: '#FBCE60' },
    };

    return (
        <div className='flex items-center justify-center pt-10'>
            {note ? (
                //@ts-ignore
                <EditForm {...note} />
            ) : (
                notFound()
            )}
        </div>
    );
}

import Logo from '@/components/Logo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Archive | Notes Management Platform',
};

export default async function ArchivePage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className=' h-screen flex items-center justify-center '>
            ArchivePage
        </div>
    );
}

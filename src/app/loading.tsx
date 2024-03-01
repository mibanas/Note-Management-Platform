import Logo from '@/components/Logo';

export default function loading() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Logo className='  animate-bounce border-none ' />
        </div>
    );
}

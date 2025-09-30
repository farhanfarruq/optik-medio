import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';


export const Footer = () => {
    return (
        <footer className="bg-neutral text-white mt-auto">
            <Container className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
                            <img src="/assets/medio.jpeg" alt="Optik Medio Logo" className="h-8 w-auto" />
                            <span>Optik Medio</span>
                        </Link>
                        <p className="text-sm text-neutral-300">Solusi penglihatan terbaik dengan gaya modern.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider">Navigasi</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link to="/katalog" className="text-neutral-300 hover:text-white">Katalog</Link></li>
                            <li><Link to="/layanan" className="text-neutral-300 hover:text-white">Layanan</Link></li>
                            <li><Link to="/tentang-kami" className="text-neutral-300 hover:text-white">Tentang</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider">Layanan</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="text-neutral-300">Pemeriksaan Mata</li>
                            <li className="text-neutral-300">Resep Lensa</li>
                            <li className="text-neutral-300">Servis Frame</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider">Kontak</h3>
                        <p className="mt-4 text-sm text-neutral-300">
                            Jl. Merdeka No. 123, Jakarta Pusat<br/>
                            (021) 123-4567
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t border-neutral-700 pt-8 text-center text-sm text-neutral-400">
                    © {new Date().getFullYear()} Optik Medio. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
};

import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';

import IconMenuCatalog from '../../components/Icon/Menu/IconMenuCatalog';
import IconMenuShoppingCart from '../../components/Icon/Menu/IconMenuShoppingCart';
import IconMenuCash from '../../components/Icon/Menu/IconMenuCash';
import IconMenuAward from '../../components/Icon/Menu/IconMenuAward';
import IconMenuDumbbell from '../../components/Icon/Menu/IconMenuDumbbell';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconBook from '../Icon/IconBook';
import IconLayoutGrid from '../Icon/IconLayoutGrid';
import IconLayout from '../Icon/IconLayout';
import IconMenu from '../Icon/IconMenu';
import IconMail from '../Icon/IconMail';
import IconMenuApps from '../Icon/Menu/IconMenuApps';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconEye from '../Icon/IconEye';

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="/entrenador/" className="main-logo flex items-center shrink-0 w-100 h-100">
                            <img className="w-[200px] flex-none" src="/assets/images/logo/logo-horizontal.svg" alt="logo" />
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <li className="menu nav-item">
                                <Link to="/entrenador/" className={`${location.pathname === '/entrenador/entrenamientos' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                    <div className="flex items-center">
                                        <IconMenuDashboard className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{'Dashboard'}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="menu nav-item">
                                <Link to="/entrenador/perfil" className={`${location.pathname === '/entrenador/entrenamientos' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('perfil')}>
                                    <div className="flex items-center">
                                        <IconMenuUsers className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{'Mis datos'}</span>
                                    </div>
                                </Link>
                            </li>
                            {/* <li className="menu nav-item">
                                <Link to="/entrenador/entrenamientos" className={`${currentMenu === 'entrenador/entrenamientos' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('entrenamientos')}>
                                    <div className="flex items-center">
                                        <IconMenuDumbbell className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{'Entrenamientos'}</span>
                                    </div>
                                </Link>
                            </li> */}
                            <li className="menu nav-item">
                                <Link to="/entrenador/entrenamientos" className={`${location.pathname === '/entrenador/entrenamientos' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('entrenamientos')}
                                >
                                    <div className="flex items-center">
                                        <IconMenuDumbbell className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{'Entrenamientos'}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="menu nav-item">
                                <Link to="/entrenador/encuestas" className={`${location.pathname === '/entrenador/entrenamientos' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('encuestas')}>
                                    <div className="flex items-center">
                                        <IconMenuForms className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{'Encuestas'}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="menu nav-item">
                                <Link to="/entrenador/grupos" className={`${location.pathname === '/entrenador/entrenamientos' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('grupos')}>
                                    <div className="flex items-center">
                                        <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{'Grupos'}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="menu nav-item">
                                <Link to="/entrenador/mensajes" className={`${location.pathname === '/entrenador/entrenamientos' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('mensajes')}>
                                    <div className="flex items-center">
                                        <IconMenuMailbox className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{'Mensajes'}</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className='mt-auto flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full' id="VerAtleta">
                            <Link to="/dashboard" className="menu nav-item">
                                <div className="flex items-center">
                                <button type="button" className="btn btn-warning rounded-full">
                                    Ver como Atleta
                                    <IconEye className="w-5 h-5 ltr:ml-1.5 rtl:mr-1.5 shrink-0" />
                                </button>
                                </div>
                            </Link>
                        </div>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

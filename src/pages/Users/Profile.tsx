import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useEffect } from 'react';
import IconPencilPaper from '../../components/Icon/IconPencilPaper';
import IconCoffee from '../../components/Icon/IconCoffee';
import IconCalendar from '../../components/Icon/IconCalendar';
import IconMapPin from '../../components/Icon/IconMapPin';
import IconMail from '../../components/Icon/IconMail';
import IconPhone from '../../components/Icon/IconPhone';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconDribbble from '../../components/Icon/IconDribbble';
import IconGithub from '../../components/Icon/IconGithub';
import IconShoppingBag from '../../components/Icon/IconShoppingBag';
import IconTag from '../../components/Icon/IconTag';
import IconCreditCard from '../../components/Icon/IconCreditCard';
import IconClock from '../../components/Icon/IconClock';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Mi perfil'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/dashboard" className="text-primary hover:underline">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/perfil" className="text-primary hover:underline before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        Atleta
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Mi perfil</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Mi perfil</h5>
                            <Link to="/perfil/editar" className="ltr:ml-auto rtl:mr-auto btn btn-primary p-2 rounded-full">
                                <IconPencilPaper />
                            </Link>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-col justify-center items-center">
                                <img src="/assets/images/profile-34.jpeg" alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                                <p className="font-semibold text-primary text-xl">Jonathan Cruz</p>
                            </div>
                            <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                                <li className="flex items-center gap-2">
                                    <IconCoffee className="shrink-0" />
                                    Developer
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconCalendar className="shrink-0" />
                                    Nov 20, 2022
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconMapPin className="shrink-0" />
                                    CDMX, México
                                </li>
                                <li>
                                    <button className="flex items-center gap-2">
                                        <IconMail className="w-5 h-5 shrink-0" />
                                        <span className="text-primary truncate">jonathan@pro-tic.mx</span>
                                    </button>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconPhone />
                                    <span className="whitespace-nowrap" dir="ltr">
                                        +52 55555-12121
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel lg:col-span-2 xl:col-span-3">
                        <div className="mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light"></h5>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Entrenamientos</h5>
                            <button className="btn btn-primary">Ver todo</button>
                        </div>
                        <div className="mb-5">
                            <div className="table-responsive text-[#515365] dark:text-white-light font-semibold">
                                <table className="whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Programas</th>
                                            <th>Progreso</th>
                                            <th>Completo</th>
                                            <th className="text-center">Última Actualización</th>
                                        </tr>
                                    </thead>
                                    <tbody className="dark:text-white-dark">
                                        <tr>
                                            <td>Rutina diaria</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-danger rounded-full w-[29.56%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-danger">29.56%</td>
                                            <td className="text-center">hace 2 minutos</td>
                                        </tr>
                                        <tr>
                                            <td>Entrenamiento <br /> de Fuerza</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-info rounded-full w-1/2"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">50%</td>
                                            <td className="text-center">hace 4 horas</td>
                                        </tr>
                                        <tr>
                                            <td>Entrenamiento <br /> de Resistencia <br /> Cardiovascular</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-warning rounded-full w-[39%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-danger">39%</td>
                                            <td className="text-center">hace 1 minuto</td>
                                        </tr>
                                        <tr>
                                            <td>Entrenamiento <br /> de Flexibilidad <br /> y Movilidad</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-success rounded-full w-[78.03%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">78.03%</td>
                                            <td className="text-center">hace 2 semanas</td>
                                        </tr>
                                        <tr>
                                            <td>Entrenamiento <br /> de Técnica <br /> y Habilidades</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-secondary rounded-full w-full"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">100%</td>
                                            <td className="text-center">hace 18 horas</td>
                                        </tr>
                                        <tr>
                                            <td>Entrenamiento <br /> de Velocidad <br /> y Agilidad</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-danger rounded-full w-[19.15%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-danger">69.15%</td>
                                            <td className="text-center">hace 5 días</td>
                                        </tr>
                                        <tr>
                                            <td>Entrenamiento <br /> de Resistencia <br /> Muscular</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-primary rounded-full w-[60.55%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">60.55%</td>
                                            <td className="text-center">hace 8 días</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-10">
                            <h5 className="font-semibold text-lg dark:text-white-light">Plan PRO</h5>
                            <button className="btn btn-primary">Renovar ahora</button>
                        </div>
                        <div className="group">
                            <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                <li>Acceso a Instalaciones +2,000</li>
                                <li>Equipos Especializados</li>
                                <li>Entrenadores y Asesores Profesionales</li>
                                <li>Ambiente Motivador y Social</li>
                                <li>Participación en Torneos y Eventos</li>
                                <li>Acceso a Servicios de Bienestar</li>
                                <li>Desarrollo de la Disciplina y Compromiso</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4 font-semibold">
                                <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />Quedan 5 días
                                </p>
                                <p className="text-info">$25 / mes</p>
                            </div>
                            <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                                <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Historial de Pagos</h5>
                        </div>
                        <div>
                            <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                <div className="flex items-center justify-between py-2">
                                    <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                        Marzo
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="font-semibold">Pagado</p>
                                        <div className="dropdown ltr:ml-4 rtl:mr-4">
                                            <Dropdown
                                                offset={[0, 5]}
                                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                                btnClassName="hover:text-primary"
                                                button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                            >
                                                <ul className="!min-w-[150px]">
                                                    <li>
                                                        <button type="button">Ver Factura</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Descargar Factura</button>
                                                    </li>
                                                </ul>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                <div className="flex items-center justify-between py-2">
                                    <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                        Febrero
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="font-semibold">Pagado</p>
                                        <div className="dropdown ltr:ml-4 rtl:mr-4">
                                            <Dropdown
                                                offset={[0, 5]}
                                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                                button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                            >
                                                <ul className="!min-w-[150px]">
                                                    <li>
                                                        <button type="button">Ver Factura</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Descargar Factura</button>
                                                    </li>
                                                </ul>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between py-2">
                                    <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                        Enero
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="font-semibold">Pagado</p>
                                        <div className="dropdown ltr:ml-4 rtl:mr-4">
                                            <Dropdown
                                                offset={[0, 5]}
                                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                                button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                            >
                                                <ul className="!min-w-[150px]">
                                                    <li>
                                                        <button type="button">Ver Factura</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Descargar Factura</button>
                                                    </li>
                                                </ul>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Profile;

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconCode from '../../components/Icon/IconCode';
import IconGlobe from '../../components/Icon/IconGlobe';
import IconGallery from '../../components/Icon/IconGallery';
import IconTxtFile from '../../components/Icon/IconTxtFile';

const Timeline = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Eventos'));
    });
    const [tabs, setTabs] = useState<string[]>([]);

    const toggleCode = (name: string) => {
        if (tabs.includes(name)) {
            setTabs((value) => value.filter((d) => d !== name));
        } else {
            setTabs([...tabs, name]);
        }
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/dashboard" className="text-primary hover:underline">
                        Inicio
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Eventos</span>
                </li>
            </ul>
            <div className="pt-5 grid xl:grid-cols-2 grid-cols-1 gap-6">

                <div className="panel">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Eventos</h5>
                    </div>
                    <div className="mb-5 inline-block w-full">
                        <ul className="relative py-12 before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:bottom-0 before:left-1/2 before:top-0 before:w-[3px] before:-ml-[1.5px] max-w-[900px] mx-auto table">
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="hidden sm:block absolute bg-info border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                                <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                                    <div>
                                        <img src="/assets/images/carousel1.jpeg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-info text-lg font-semibold">Torneo de fútbol</h4>
                                        <p className="mb-3 text-white-dark">
                                            Torneo local o regional con partidos eliminatorios entre equipos de la misma categoría.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-info">
                                                Ver más
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="hidden sm:block absolute bg-primary border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                                <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-right rtl:sm:float-left before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full  ltr:before:-left-[37px] rtl:before:-right-[37px] before:top-10 sm:before:block before:hidden">
                                    <div>
                                        <img src="/assets/images/menu-heade.jpg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-primary text-lg font-semibold">Campeonato de atletismo</h4>
                                        <p className="mb-3 text-white-dark">
                                        Carreras de 100m, 200m, 400m, etc., así como saltos de longitud, lanzamiento de jabalina, etc.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-primary">
                                               Ver más
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="hidden sm:block absolute bg-success border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                                <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                                    <div>
                                        <img src="/assets/images/carousel1.jpeg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-success text-lg font-semibold">Exhibición de deportes extremos</h4>
                                        <p className="mb-3 text-white-dark">
                                        Eventos como demostraciones de BMX, skateboarding, parkour o deportes acuáticos, dependiendo de la ubicación del club.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-success">
                                                Ver más
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="hidden sm:block absolute bg-danger border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                                <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-right rtl:sm:float-left before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full  ltr:before:-left-[37px] rtl:before:-right-[37px] before:top-10 sm:before:block before:hidden">
                                    <div>
                                        <img src="/assets/images/menu-heade.jpg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-danger text-lg font-semibold">Gala de premiación</h4>
                                        <p className="mb-3 text-white-dark">
                                        Evento para reconocer a los mejores deportistas, entrenadores y voluntarios del club a lo largo de la temporada.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-danger">
                                                Ver más
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Timeline;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import ReactApexChart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconArrowLeft from '../components/Icon/IconArrowLeft';
import IconHeart from '../components/Icon/IconHeart';
import IconChecks2 from '../components/Icon/IconChecks2';
import IconClock2 from '../components/Icon/IconClock2';
import IconFile2 from '../components/Icon/IconFile2';
import IconX2 from '../components/Icon/IconX2';
import { useNavigate } from 'react-router-dom';
import IconClock from '../components/Icon/IconClock';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Seleccionar'));
    });
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;


    const navigator = useNavigate();
    const handleRedirect = () => {
        navigator('/entrenamientos/ver');
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/seleccionar" className="text-primary hover:underline">
                        Seleccionar
                    </Link>
                </li>
            </ul>

            <div className="pt-5">

                <div className="panel mt-10 text-center md:mt-20">
                    <h2 className="mb-2 text-3xl font-bold dark:text-white md:text-2xl">Ver como Atleta</h2>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/dashboard">
                            <button type="button" className="btn btn-info btn-lg">
                                Atleta
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="panel mt-10 text-center md:mt-20">
                    <h2 className="mb-2 text-3xl font-bold dark:text-white md:text-2xl">Ver como Entrenador</h2>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/entrenador">
                            <button type="button" className="btn btn-warning btn-lg">
                                Entrenador
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;

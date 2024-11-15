import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import { IRootState } from '../../store';
import { useNavigate } from "react-router-dom";

const Error403 = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Error 403'));
    });
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    let navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="px-6 py-16 text-center font-semibold before:container before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0)_50.73%)] before:aspect-square before:opacity-10 md:py-20">
                <div className="relative">
                    <img src={isDark ? '/assets/images/error/503-dark.svg' : '/assets/images/error/503-light.svg'} alt="503" className="mx-auto w-full max-w-xs object-cover md:max-w-xl" />
                    <p className="mt-5 text-base dark:text-white">No tienes permiso para realizar esta acción, validalo con el administrador!</p>
                    <button  onClick={() => navigate(-2)} className="btn btn-primary mx-auto !mt-7 w-max border-0 uppercase shadow-none">
                        Atras
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error403;

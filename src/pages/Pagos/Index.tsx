import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';

import IconClock2 from '../../components/Icon/IconClock2';
import IconChecks2 from '../../components/Icon/IconChecks2';
import IconFile2 from '../../components/Icon/IconFile2';
import IconX2 from '../../components/Icon/IconX2';

const Widgets = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Widgets'));
    });
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;


    return (
        <div>
            <div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">

                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Mis Pagos</h5>
                        </div>
                        <div>
                            <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                <div className="flex items-center justify-between py-2">
                                    <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                        Noviembre
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="text-success font-semibold"><span className='badge bg-danger'>Declinado</span></p>
                                        <div className="dropdown ltr:ml-4 rtl:mr-4">
                                            <Dropdown
                                                offset={[0, 5]}
                                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                                btnClassName="hover:text-primary"
                                                button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                            >
                                                <ul className="!min-w-[150px]">
                                                    <li>
                                                        <Link className="flex items-center" to="/pagos/pagar">Reintentar</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='flex items-center' to="/pagos/tarjetas">Ver Tarjetas</Link>
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
                                        Octubre
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="text-success font-semibold"><span className='badge bg-success'>Pagado</span></p>
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
                                        Septiembre
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="text-success font-semibold"><span className='badge bg-success'>Pagado</span></p>
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
                                        Agosto
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="text-success font-semibold"><span className='badge bg-success'>Pagado</span></p>
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
                                        Julio
                                        <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                    </h6>
                                    <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                        <p className="text-success font-semibold"><span className='badge bg-success'>Pagado</span></p>
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
                    <div className="panel h-full w-full">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Historial de pagos</h5>
                        </div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Factura</th>
                                        <th>Precio</th>
                                        <th className="ltr:rounded-r-md rtl:rounded-l-md">Estatus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                                        <td>
                                            <Link to="/apps/invoice/preview">#46894</Link>
                                        </td>
                                        <td>$56.07</td>
                                        <td>
                                            <Link className="text-danger flex items-center" to="/pagos/pagar">
                                                <IconX2 className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                Declinado
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                                        <td>
                                            <Link to="/apps/invoice/preview">#76894</Link>
                                        </td>
                                        <td>$126.04</td>
                                        <td>
                                            <Link className="text-warning flex items-center" to="/">
                                                <IconClock2 className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                Pediente
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                                        <td>
                                            <Link to="/apps/invoice/preview">#66894</Link>
                                        </td>
                                        <td>$56.07</td>
                                        <td>
                                            <Link className="text-success flex items-center" to="/">
                                                <IconChecks2 className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                Pagado
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                                        <td>
                                            <Link to="/apps/invoice/preview">#75844</Link>
                                        </td>
                                        <td>$110.00</td>
                                        <td>
                                            <Link className="text-info flex items-center" to="/apps/factura/preview">
                                                <IconFile2 className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                Facturado
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                                        <td>
                                            <Link to="/apps/invoice/preview">#46894</Link>
                                        </td>
                                        <td>$56.07</td>
                                        <td>
                                            <Link className="text-info flex items-center" to="/apps/factura/preview">
                                                <IconFile2 className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                Facturado
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widgets;

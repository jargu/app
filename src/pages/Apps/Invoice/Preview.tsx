import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconSend from '../../../components/Icon/IconSend';
import IconPrinter from '../../../components/Icon/IconPrinter';
import IconDownload from '../../../components/Icon/IconDownload';
import IconEdit from '../../../components/Icon/IconEdit';
import IconPlus from '../../../components/Icon/IconPlus';

const Preview = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Vista previa Factura'));
    });
    const exportTable = () => {
        window.print();
    };

    const items = [
        {
            id: 1,
            title: 'Zapatos deportivos',
            quantity: 1,
            price: '120',
            amount: '120',
        },
        {
            id: 2,
            title: 'Ropa deportiva',
            quantity: 1,
            price: '230',
            amount: '230',
        },
        {
            id: 3,
            title: 'Termo 1 litro',
            quantity: 1,
            price: '405',
            amount: '405',
        },
        {
            id: 4,
            title: 'Renovacion mensual',
            quantity: 1,
            price: '2500',
            amount: '2500',
        },
    ];

    const columns = [
        {
            key: 'id',
            label: 'PARTIDA',
        },
        {
            key: 'title',
            label: 'ITEMS',
        },
        {
            key: 'quantity',
            label: 'CANTIDAD',
        },
        {
            key: 'price',
            label: 'PRECIO',
            class: 'ltr:text-right rtl:text-left',
        },
        {
            key: 'amount',
            label: 'CANTIDAD',
            class: 'ltr:text-right rtl:text-left',
        },
    ];

    return (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <button type="button" className="btn btn-info gap-2">
                    <IconSend />
                    ENVIAR FACTURA
                </button>

                <button type="button" className="btn btn-primary gap-2" onClick={() => exportTable()}>
                    <IconPrinter />
                    IMPRIMIR
                </button>

                <button type="button" className="btn btn-secondary gap-2">
                    <IconDownload />
                    DESCARGAR
                </button>

                <Link to="/apps/invoice/add" className="btn btn-success gap-2">
                    <IconPlus />
                    CREAR
                </Link>

                <Link to="/apps/invoice/edit" className="btn btn-warning gap-2">
                    <IconEdit />
                    EDITAR
                </Link>
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">FACTURA</div>
                    <div className="shrink-0">
                        <img src="/assets/images/logo/K-color.svg" alt="img" className="w-14 ltr:ml-auto rtl:mr-auto" />
                    </div>
                </div>
                <div className="ltr:text-right rtl:text-left px-4">
                    <div className="space-y-1 mt-6 text-white-dark">
                        <div>Toltecas 166, Carola Alvaro Obregon, CDMX</div>
                        <div>hola@pro-tic.mx</div>
                        <div>55 3127 9167</div>
                    </div>
                </div>

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                    <div className="flex-1">
                        <div className="space-y-1 text-white-dark">
                            <div>Para:</div>
                            <div className="text-black dark:text-white font-semibold">Jonathan Cruz</div>
                            <div>Agustín Lara</div>
                            <div>jlcruz@company.com</div>
                            <div>(128) 666 070</div>
                        </div>
                    </div>
                    <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                        <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">Factura :</div>
                                <div>#8701</div>
                            </div>
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">Fecha :</div>
                                <div>13 Sep 2024</div>
                            </div>
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">ID Órden :</div>
                                <div>#OD-85794</div>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <div className="text-white-dark">ID de envío :</div>
                                <div>#SHP-8594</div>
                            </div>
                        </div>
                        <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">Datos del banco:</div>
                                <div className="whitespace-nowrap">Banco de México</div>
                            </div>
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">CLABE Interbancaria:</div>
                                <div>1234567890</div>
                            </div>
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">Código SWIFT :</div>
                                <div>S58K796</div>
                            </div>
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">IBAN:</div>
                                <div>L5698445485</div>
                            </div>
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">País:</div>
                                <div>México</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive mt-6">
                    <table className="table-striped">
                        <thead>
                            <tr>
                                {columns.map((column) => {
                                    return (
                                        <th key={column.key} className={column?.class}>
                                            {column.label}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td className="ltr:text-right rtl:text-left">${item.price}</td>
                                        <td className="ltr:text-right rtl:text-left">${item.amount}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 px-4 mt-6">
                    <div></div>
                    <div className="ltr:text-right rtl:text-left space-y-2">
                        <div className="flex items-center">
                            <div className="flex-1">Subtotal</div>
                            <div className="w-[37%]">$3255</div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-1">Impuestos</div>
                            <div className="w-[37%]">$700</div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-1">Tarifa de envío</div>
                            <div className="w-[37%]">$0</div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-1">Descuento</div>
                            <div className="w-[37%]">$10</div>
                        </div>
                        <div className="flex items-center font-semibold text-lg">
                            <div className="flex-1">Gran Total</div>
                            <div className="w-[37%]">$3945</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;

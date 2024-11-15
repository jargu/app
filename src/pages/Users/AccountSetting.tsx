import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import IconHome from '../../components/Icon/IconHome';
import IconDollarSignCircle from '../../components/Icon/IconDollarSignCircle';
import IconUser from '../../components/Icon/IconUser';
import IconLinkedin from '../../components/Icon/IconLinkedin';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconFacebook from '../../components/Icon/IconFacebook';
import Select from 'react-select';
import Dropdown from '../../components/Dropdown';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import { IRootState } from '../../store';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../components/Icon/IconX';

const AccountSetting = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Editar perfil'));
    });
    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };
    const options4 = [
        { value: 'grupo', label: 'Grupo A' },
        { value: 'grupo', label: 'Grupo B' },
        { value: 'grupo', label: 'Grupo C' },
    ];
    const options5 = [
        { value: 'atleta', label: 'Avanzado' },
        { value: 'atleta', label: 'Intermedio' },
        { value: 'atleta', label: 'Principiante' },
    ];
    const options3 = [
        { value: '1', label: 'Semanal' },
        { value: '2', label: 'Mensual' },
        { value: '3', label: 'Bimestral' },
        { value: '4', label: 'Trimestral' },
        { value: '5', label: 'Semestral' },
        { value: '6', label: 'Anual' },
    ];
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [modal5, setModal5] = useState(false);

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
                    <span>Editar Perfil</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Configurar</h5>
                </div>
                <div>
                    <ul className="sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('home')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconHome />
                                Inicio
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('payment-details')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconDollarSignCircle />
                                Detalles de pago
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('preferences')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'preferences' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconUser className="w-5 h-5" />
                                Preferencias
                            </button>
                        </li>
                    </ul>
                </div>
                {tabs === 'home' ? (
                    <div>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">Información General</h6>
                            <div className="flex flex-col sm:flex-row">
                                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                    <img src="/assets//images/profile-34.jpeg" alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                                </div>
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name">Nombre completo</label>
                                        <input id="name" type="text" placeholder="Jonathan Cruz" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Coreo electrónico</label>
                                        <input id="email" type="email" placeholder="jonathan@pro-tic.mx" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Teléfono</label>
                                        <input id="phone" type="text" placeholder="+52 55555-12121" className="form-input" />
                                    </div>
                                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                                        <div>
                                            <label htmlFor="name">Peso</label>
                                            <input id="name" type="text" placeholder="Peso" defaultValue="" className="form-input" />
                                        </div>
                                        <div>
                                            <label htmlFor="name">Altura</label>
                                            <input id="name" type="text" placeholder="Altura" defaultValue="" className="form-input" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="address">Dirección</label>
                                        <textarea id="address" rows={3} placeholder="CDMX, México" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="country">País</label>
                                        <select defaultValue="México" id="country" className="form-select text-white-dark">
                                            <option value="All Countries">All Countries</option>
                                            <option value="United States">United States</option>
                                            <option value="India">India</option>
                                            <option value="Japan">Japan</option>
                                            <option value="China">China</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Canada">Canada</option>
                                            <option value="México">México</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="location">Ubicación</label>
                                        <input id="location" type="text" placeholder="CDMX, México" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="profession">Profesión</label>
                                        <input id="profession" type="text" placeholder="Developer" className="form-input" />
                                    </div>
                                    <div className="flex items-center justify-between mb-5">
                                        <h5 className="font-semibold text-lg dark:text-white-light">Datos adicionales</h5>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div>
                                            <label htmlFor="name">Subcategoria</label>
                                            <Select placeholder="Seleccione..." options={options5} isDisabled defaultValue={options5[1]} isSearchable={false}/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div>
                                            <label htmlFor="name">Grupo</label>
                                            <Select placeholder="Seleccione..." options={options4} isDisabled defaultValue={options4[0]} isSearchable={false}/>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 mt-3">
                                        <button type="button" className="btn btn-success">
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">Redes sociales</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <IconLinkedin className="w-5 h-5" />
                                    </div>
                                    <input type="text" placeholder="protic_mx" className="form-input" />
                                </div>
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <IconTwitter className="w-5 h-5" />
                                    </div>
                                    <input type="text" placeholder="protic_mx" className="form-input" />
                                </div>
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <IconFacebook className="w-5 h-5" />
                                    </div>
                                    <input type="text" placeholder="protic_mx" className="form-input" />
                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    ''
                )}
                {tabs === 'payment-details' ? (
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

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
                            <div className="panel">
                                <div className="flex items-center justify-between mb-5">
                                    <h5 className="font-semibold text-lg dark:text-white-light">Métodos de pago</h5>
                                </div>
                                <div className='mb-5'>
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex-none">
                                                <img src="/assets/images/card-americanexpress.svg" alt="img" />
                                            </div>
                                            <div className="flex items-center justify-between flex-auto ltr:ml-4 rtl:mr-4">
                                                <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                                    Membresía American Express
                                                    <span className="block text-white-dark dark:text-white-light">Válida hasta 12/2025</span>
                                                </h6>
                                                <span className="badge bg-success ltr:ml-auto rtl:mr-auto">Principal</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex-none">
                                                <img src="/assets/images/card-mastercard.svg" alt="img" />
                                            </div>
                                            <div className="flex items-center justify-between flex-auto ltr:ml-4 rtl:mr-4">
                                                <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                                    Membresía Mastercard
                                                    <span className="block text-white-dark dark:text-white-light">Válida hasta 03/2025</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex-none">
                                                <img src="/assets/images/card-visa.svg" alt="img" />
                                            </div>
                                            <div className="flex items-center justify-between flex-auto ltr:ml-4 rtl:mr-4">
                                                <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                                    Membresía Visa
                                                    <span className="block text-white-dark dark:text-white-light">Válida hasta 10/2025</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={() => setModal5(true)}>Agregar nuevo</button>
                                <Transition appear show={modal5} as={Fragment}>
                                    <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0" />
                                        </Transition.Child>
                                        <div className="fixed inset-0 bg-[black]/60 z-[999]">
                                            <div className="flex items-start justify-center min-h-screen h-[100vh]">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 scale-95"
                                                    enterTo="opacity-100 scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 scale-100"
                                                    leaveTo="opacity-0 scale-95"
                                                >
                                                    <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full h-full max-w-full text-black dark:text-white-dark">
                                                    <div className="flex items-center justify-end px-5 pt-3 dark:bg-[#121c2c]">
                                                        <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal5(false)}>
                                                            <IconX />
                                                        </button>
                                                    </div>
                                                        <div className="p-5">
                                                            <div className="panel">
                                                                <div className="mb-5">
                                                                    <h5 className="font-semibold text-lg mb-4">Agregar Método de Pago</h5>
                                                                    <p>
                                                                        Cambios en tu Nueva <span className="text-primary">Información del Método de Pago</span>.
                                                                    </p>
                                                                </div>
                                                                <div className="mb-5">
                                                                    <form>
                                                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                            <div>
                                                                                <label htmlFor="payBrand">Marca de Tarjeta</label>
                                                                                <select id="payBrand" className="form-select text-white-dark">
                                                                                    <option value="Mastercard">Mastercard</option>
                                                                                    <option value="American Express">American Express</option>
                                                                                    <option value="Visa">Visa</option>
                                                                                    <option value="Discover">Discover</option>
                                                                                </select>
                                                                            </div>
                                                                            <div>
                                                                                <label htmlFor="payNumber">Número de Tarjeta</label>
                                                                                <input id="payNumber" type="text" placeholder="Número de Tarjeta" className="form-input" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                            <div>
                                                                                <label htmlFor="payHolder">Nombre del Titular</label>
                                                                                <input id="payHolder" type="text" placeholder="Nombre del Titular" className="form-input" />
                                                                            </div>
                                                                            <div>
                                                                                <label htmlFor="payCvv">CVC</label>
                                                                                <input id="payCvv" type="text" placeholder="CVC" className="form-input" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                            <div>
                                                                                <label htmlFor="payExp">Vencimiento de la Tarjeta</label>
                                                                                <input id="payExp" type="text" placeholder="Vencimiento de la Tarjeta" className="form-input" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-8 flex items-center justify-end">
                                                                            <button type="button" className="btn btn-outline-danger" onClick={() => setModal5(false)}>
                                                                                Cancelar
                                                                            </button>
                                                                            <button type="button" className="btn btn-success ltr:ml-4 rtl:mr-4" onClick={() => setModal5(false)}>
                                                                                Agregar
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </div>
                            <div className="panel">
                                <div className="mb-5">
                                <h5 className="font-semibold text-lg mb-4">Dirección de Facturación</h5>
                                <p>
                                    Los cambios en tu <span className="text-primary">información de facturación</span> se aplicarán a partir del próximo pago programado y se reflejarán en tu próxima factura.
                                </p>

                                </div>
                                <div className="mb-5">
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Dirección #1
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">Toltecas 166, Carola Alvaro Obregon, CDMX</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Editar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Dirección #2
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">Toltecas 166, Carola Alvaro Obregon, CDMX</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Editar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start justify-between py-3">
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Dirección #3
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">Toltecas 166, Carola Alvaro Obregon, CDMX</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Editar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className="btn btn-primary">Agregar Dirección</button> */}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="panel">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Agregar Dirección de Facturación</h5>
                                    <p>
                                        Cambios en tu Nueva <span className="text-primary">Información de Facturación</span>.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <form>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="billingName">Nombre</label>
                                                <input id="billingName" type="text" placeholder="Ingresa Nombre" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="billingEmail">Correo Electrónico</label>
                                                <input id="billingEmail" type="email" placeholder="Ingresa Correo Electrónico" className="form-input" />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="billingAddress">Dirección</label>
                                            <input id="billingAddress" type="text" placeholder="Ingresa Dirección" className="form-input" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                            <div className="md:col-span-2">
                                                <label htmlFor="billingCity">Ciudad</label>
                                                <input id="billingCity" type="text" placeholder="Ingresa Ciudad" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="billingState">Estado</label>
                                                <select id="billingState" className="form-select text-white-dark">
                                                    <option>Elige...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="billingZip">Código Postal</label>
                                                <input id="billingZip" type="text" placeholder="Ingresa Código Postal" className="form-input" />
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-primary">
                                            Agregar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    ''
                )}
                {tabs === 'preferences' ? (
                    <div className="switch">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Elige un tema</h5>
                                <div className="flex justify-around">
                                    <div className="flex">
                                        <label className="inline-flex cursor-pointer">
                                            <input className="form-radio ltr:mr-4 rtl:ml-4 cursor-pointer" type="radio" name="flexRadioDefault" defaultChecked />
                                            <span>
                                                <img className="ms-3" width="100" height="68" alt="settings-dark" src="/assets/images/settings-light.svg" />
                                            </span>
                                        </label>
                                    </div>

                                    <label className="inline-flex cursor-pointer">
                                        <input className="form-radio ltr:mr-4 rtl:ml-4 cursor-pointer" type="radio" name="flexRadioDefault" />
                                        <span>
                                            <img className="ms-3" width="100" height="68" alt="settings-light" src="/assets/images/settings-dark.svg" />
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Datos de Actividad</h5>
                                <p>Descarga tu Resumen, entrenamientos, encuestas, mensajes e Historial de Pagos</p>
                                <button type="button" className="btn btn-primary">
                                    Descargar Datos
                                </button>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Perfil Público</h5>
                                <p>
                                    Tu <span className="text-primary">Perfil</span> será visible para cualquiera en la red.
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Mostrar mi correo electrónico</h5>
                                <p>
                                    Tu <span className="text-primary">Correo Electrónico</span> será visible para cualquiera en la red.
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox2" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Anuncios</h5>
                                <p>
                                    No Mostrar <span className="text-primary">Anuncios</span> en tu tablero.
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" checked disabled className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox5" />
                                    <span className="bg-[#ebedf2] opacity-[0.5] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                                <small className="ltr:text-left rtl:text-left w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 before:ltr:mr-1 rtl:before:ml-1">
                                    <cite className="italic">Solo disponible con cuenta PREMIUM</cite>
                                </small>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Perfil Social</h5>
                                <p>
                                    Habilita tus perfiles <span className="text-primary">sociales</span> en esta red.
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox6" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                        </div>

                    </div>
                ) : (
                    ''
                )}
                {tabs === 'danger-zone' ? (
                    <div className="switch">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Purge Cache</h5>
                                <p>Remove the active resource from the cache without waiting for the predetermined cache expiry time.</p>
                                <button className="btn btn-secondary">Clear</button>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Deactivate Account</h5>
                                <p>You will not be able to receive messages, notifications for up to 24 hours.</p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox7" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Delete Account</h5>
                                <p>Once you delete the account, there is no going back. Please be certain.</p>
                                <button className="btn btn-danger btn-delete-account">Delete my account</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default AccountSetting;

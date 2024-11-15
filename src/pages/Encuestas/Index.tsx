import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconClock from '../../components/Icon/IconClock';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import IconX from '../../components/Icon/IconX';
import AnimateHeight from 'react-animate-height';
import IconAirplay from '../../components/Icon/IconAirplay';
import IconBox from '../../components/Icon/IconBox';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconCode from '../../components/Icon/IconCode';
import IconLayout from '../../components/Icon/IconLayout';
import IconChecks from '../../components/Icon/IconChecks';
import IconFolder from '../../components/Icon/IconFolder';

const Encuestas = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Encuestas'));
    });


    const [modal2, setModal2] = useState(false);



    const [pollsProgress, setPollsProgress] = useState([
        {
            id: 1,
            type:'Satisfacción General',
            question: '¿Qué tan satisfecho estás con las instalaciones del club?',
            options: [
                { id: 1, text: 'Muy satisfecho', votes: 45 },
                { id: 2, text: 'Satisfecho', votes: 35 },
                { id: 3, text: 'Poco satisfecho', votes: 12 },
                { id: 4, text: 'Nada satisfecho', votes: 2 },
            ],
            votes:'35',
            end:'15 días',
        },
        {
            id: 2,
            type:'Instalaciones y Equipamiento',
            question: '¿Recomendarías el club a amigos o familiares?',
            options: [
                { id: 1, text: '¡Por supuesto!', votes: 224 },
                { id: 2, text: 'Lo pensaría', votes: 130 },
                { id: 3, text: 'Para nada', votes: 1 },
            ],
            votes:'95',
            end:'8 días',
        },
        {
            id: 3,
            type:'Calidad del Servicio y Personal',
            question: '¿Te sientes bienvenido y cómodo en el club?',
            options: [
                { id: 1, text: 'Muy agradable', votes: 465 },
                { id: 2, text: 'Poco incómodo', votes: 65 },
                { id: 3, text: 'Incómodo', votes: 0 },
            ],
            votes:'98',
            end:'3 día',
        },
    ]);
    const [pollsComplete, setPollsComplete] = useState([
        {
            id: 1,
            type:'Satisfacción General',
            question: '¿Están los horarios de las actividades alineados con tu disponibilidad?',
            options: [
                { id: 1, text: 'Muy satisfecho', votes: 245 },
                { id: 2, text: 'Satisfecho', votes: 135 },
                { id: 3, text: 'Poco satisfecho', votes: 52 },
                { id: 4, text: 'Nada satisfecho', votes: 2 },
            ],
            votes:'95',
        },
        {
            id: 2,
            type:'Instalaciones y Equipamiento',
            question: '¿Recomendarías el club a amigos o familiares?',
            options: [
                { id: 1, text: '¡Por supuesto!', votes: 24 },
                { id: 2, text: 'Lo pensaría', votes: 30 },
                { id: 3, text: 'Para nada', votes: 1 },
            ],
            votes:'98',
        },
        {
            id: 3,
            type:'Calidad del Servicio y Personal',
            question: '¿Te sientes bienvenido y cómodo en el club?',
            options: [
                { id: 1, text: 'Muy agradable', votes: 65 },
                { id: 2, text: 'Poco incómodo', votes: 15 },
                { id: 3, text: 'Incómodo', votes: 0 },
            ],
            votes:'89',
        },
    ]);

    interface option {
        id: number;
        text: string;
        votes: number;
    }

    const parseDaysLeft = (end: string) => {
        const days = parseInt(end.split(' ')[0], 10);
        return isNaN(days) ? 0 : days;
    };

    const [selectedPoll, setSelectedPoll] = useState<{
        type: string;
        question: string;
        votes: string;
        options: { id: number; text: string; votes: number }[];
        end: string;
        daysLeft: number;
        backgroundClass: string;
    } | null>(null);

    const openModal = (poll: any) => {
        setSelectedPoll(poll);
        setModal2(true);
    };
    const handleOpenModal = (poll: any) => {
        const daysLeft = parseDaysLeft(poll.end);
        const backgroundClass =
            daysLeft > 10 ? 'bg-success/20 text-success' :
            daysLeft > 5 ? 'bg-warning/20 text-warning' :
            'bg-danger/20 text-danger';

        setSelectedPoll({
            ...poll,
            daysLeft,
            backgroundClass,
        });
        setModal2(true);
    };

    const [hasVoted, setHasVoted] = useState(false);



    const [modal3, setModal3] = useState(false);
    const [active2, setActive2] = useState<string>('0');

    const togglePara2 = (value: string) => {
        setActive2((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    const handleOpenModalComplete = (poll: any) => {
        setSelectedPoll(poll);
        setModal3(true);
    };

    // const handleOpenModalComplete = (poll: SetStateAction<{ type: string; question: string; votes: string; options: { id: number; text: string; votes: number; }[]; end: string; daysLeft: number; backgroundClass: string; } | null>) => {
    //     setSelectedPoll(poll);
    //     setModal3(true);
    // };


    const calculateTotalVotes = (options: any[]) => {
        return options.reduce((total, option) => total + option.votes, 0);
    };
    const calculatePercentage = (votes: number, totalVotes: number) => {
        if (totalVotes === 0) return 0;
        return Math.round((votes / totalVotes) * 100);
    };

    const getWidthClass = (percentage: number) => {
        if (percentage >= 100) return 'w-full';
        if (percentage >= 11 * 8.33) return 'w-11/12';
        if (percentage >= 10 * 8.33) return 'w-10/12';
        if (percentage >= 9 * 8.33) return 'w-9/12';
        if (percentage >= 8 * 8.33) return 'w-8/12';
        if (percentage >= 7 * 8.33) return 'w-7/12';
        if (percentage >= 6 * 8.33) return 'w-6/12';
        if (percentage >= 5 * 8.33) return 'w-5/12';
        if (percentage >= 4 * 8.33) return 'w-4/12';
        if (percentage >= 3 * 8.33) return 'w-3/12';
        if (percentage >= 2 * 8.33) return 'w-2/12';
        return 'w-1/12';
    };


    return (
        <div>

            <div className="mt-6">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">En progreso</h5>
                        </div>
                        {pollsProgress.map(poll => {
                            const daysLeft = parseDaysLeft(poll.end);
                            let backgroundClass;
                            if (daysLeft > 10) {
                                backgroundClass = 'bg-success/20 text-success';
                            } else if (daysLeft > 5) {
                                backgroundClass = 'bg-warning/20 text-warning';
                            } else {
                                backgroundClass = 'bg-danger/20 text-danger';
                            }

                            return (
                                <div key={poll.id} className="poll">
                                    <div className="mb-5 flex items-center justify-center">
                                        <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
                                            <div className="flex justify-between mb-3">
                                                <div><h6 className="text-black font-semibold text-base dark:text-white-light">{poll.type}</h6></div>
                                                <div><span className="badge bg-success/10 text-success py-1.5 dark:bg-success dark:text-white inline-flex">ABIERTA</span></div>
                                            </div>
                                            <div className="flex items-center justify-start">
                                                <p className="text-white-dark mb-3">{poll.question}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-primary font-semibold">{poll.votes}%</span>
                                                <div className="bg-[#ebedf2] dark:bg-black rounded-full w-full h-1.5 mt-1.5">
                                                    <div className="rounded-full bg-gradient-to-r from-[#04befe] to-[#4481eb] h-full" style={{ width: `${poll.votes}%` }}></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-3">
                                                <div className={`flex items-center rounded-full ${backgroundClass} px-2 py-1 text-xs font-semibold`}>
                                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />Termina en {poll.end}
                                                </div>
                                                <div>
                                                    <button type="button" className="btn btn-outline-success btn-sm" onClick={() => handleOpenModal(poll)}>
                                                        Votar
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    <Transition appear show={modal2} as={Fragment}>
                        <Dialog as="div" open={modal2} onClose={() => setModal2(false)}>
                            <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto">
                                <div className="flex items-center justify-center min-h-screen px-4">
                                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                        <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                            <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                                <h5 className="font-bold text-lg">Satisfacción General</h5>
                                                <button onClick={() => setModal2(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <div className="mb-5 flex items-center justify-center">
                                                    <div className="max-w-[22rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                                        <div className="py-7 px-6">
                                                            <p className="text-primary text-xs mb-1.5 font-bold">15 Nov 2024</p>
                                                            <h5 className="text-[#3b3f5c] text-[18px] font-bold mb-3 dark:text-white-light">{selectedPoll?.question}</h5>
                                                            {hasVoted ? (
                                                                <div>
                                                                    <p className="text-white-dark mb-3"><strong>Resultados:</strong></p>
                                                                    {selectedPoll?.options.map(option => {
                                                                        const totalVotes = calculateTotalVotes(selectedPoll.options);
                                                                        const percentage = calculatePercentage(option.votes, totalVotes);
                                                                        return (
                                                                            <div className='mb-2' key={option.id}>
                                                                                <label htmlFor="title">{option.text} - {percentage}% ({option.votes} votos)</label>
                                                                                <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                                                                                    <div className={`bg-danger h-4 rounded-full text-center text-white flex justify-between items-center px-2 text-xs ${getWidthClass(percentage)}`}>
                                                                                        {/* <span>{option.text}</span> */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <p className="text-white-dark mb-3"><strong>Opciones:</strong></p>
                                                                    {selectedPoll?.options.map(option => (
                                                                        <div key={option.id}>
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="optionGroup"
                                                                                    value={option.id}
                                                                                    className="form-radio text-info rounded-full peer"
                                                                                />
                                                                                <span className="peer-checked:text-info">{option.text}</span>
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                    <div className="flex items-center justify-between mt-3">
                                                                        <div className={`flex items-center rounded-full ${selectedPoll?.backgroundClass} px-2 py-1 text-xs font-semibold`}>
                                                                            <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />Termina en {selectedPoll?.end}
                                                                        </div>
                                                                        <div>
                                                                            <button type="button" className="btn btn-outline-success btn-sm" onClick={() => {
                                                                                setHasVoted(true);
                                                                                openModal(selectedPoll);
                                                                            }}>
                                                                                {hasVoted ? 'Votos Enviados' : 'Enviar'}
                                                                            </button>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            )}

                                                            <div className="relative flex justify-between mt-6 pt-4 before:w-[250px] before:h-[1px] before:bg-white-light before:inset-x-0 before:top-0 before:absolute before:mx-auto dark:before:bg-[#1b2e4b]">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                    <div className="bg-white">
                        <div className="mb-5">
                            <div className="space-y-2 font-semibold">
                                <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`p-4 w-full flex items-center font-semibold text-lg text-success dark:bg-[#1b2e4b] ${active2 === '1' ? '!text-success' : ''}`}
                                        onClick={() => togglePara2('1')}
                                    >
                                        <IconChecks className="ltr:mr-2 rtl:ml-2 dark:text-white-light shrink-0" />
                                        <h5 className="font-semibold text-lg dark:text-white-light">Terminadas</h5>
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active2 === '1' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active2 === '1' ? 'auto' : 0}>
                                            <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                                            {pollsComplete.map(poll => {


                                            return (
                                                <div key={poll.id} className="poll">
                                                    <div className="mb-5 flex items-center justify-center">
                                                        <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
                                                            <div className="flex justify-between mb-3">
                                                                <div><h6 className="text-black font-semibold text-base dark:text-white-light">{poll.type}</h6></div>
                                                                <div><span className="badge bg-danger/10 text-danger py-1.5 dark:bg-danger dark:text-white inline-flex">CERRADA</span></div>
                                                            </div>
                                                            <div className="flex items-center justify-start">
                                                                <p className="text-white-dark mb-3">{poll.question}</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <span className="text-primary font-semibold">{poll.votes}%</span>
                                                                <div className="bg-[#ebedf2] dark:bg-black rounded-full w-full h-1.5 mt-1.5">
                                                                    <div className="rounded-full bg-gradient-to-r from-[#04befe] to-[#4481eb] h-full" style={{ width: `${poll.votes}%` }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center justify-between mt-3">
                                                                <div>
                                                                    <button type="button" className="btn btn-outline-success btn-sm" onClick={() => handleOpenModalComplete(poll)}>
                                                                        Resultados
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                            })}
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                                <Transition appear show={modal3} as={Fragment}>
                                    <Dialog as="div" open={modal3} onClose={() => setModal3(false)}>
                                        <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto">
                                            <div className="flex items-center justify-center min-h-screen px-4">
                                                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                                    <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                                        <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                                            <h5 className="font-bold text-lg">{selectedPoll?.type}</h5>
                                                            <button onClick={() => setModal3(false)} type="button" className="text-white-dark hover:text-dark">
                                                                <IconX />
                                                            </button>
                                                        </div>
                                                        <div className="p-5">
                                                            <div className="mb-5 flex items-center justify-center">
                                                                <div className="max-w-[22rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                                                    <div className="py-7 px-6">
                                                                        <p className="text-primary text-xs mb-1.5 font-bold">15 Nov 2024</p>
                                                                        <h5 className="text-[#3b3f5c] text-[18px] font-bold mb-3 dark:text-white-light">{selectedPoll?.question}</h5>
                                                                        <div>
                                                                            <p className="text-white-dark mb-3"><strong>Resultados:</strong></p>
                                                                            {selectedPoll?.options.map(option => {
                                                                                const totalVotes = calculateTotalVotes(selectedPoll.options);
                                                                                const percentage = calculatePercentage(option.votes, totalVotes);
                                                                                return (
                                                                                    <div className='mb-2' key={option.id}>
                                                                                        <label htmlFor="title">{option.text} - {percentage}% ({option.votes} votos)</label>
                                                                                        <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                                                                                        <div className={`bg-gradient-to-r from-[#3cba92] to-[#0ba360] h-4 rounded-full text-center text-white flex justify-between items-center px-2 text-xs ${getWidthClass(percentage)}`}>
                                                                                                {/* <span>{option.text}</span> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>

                                                                        <div className="relative flex justify-between mt-6 pt-4 before:w-[250px] before:h-[1px] before:bg-white-light before:inset-x-0 before:top-0 before:absolute before:mx-auto dark:before:bg-[#1b2e4b]">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                                <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
                                    <button
                                        type="button"
                                        className={`p-4 w-full flex items-center font-semibold text-lg text-warning dark:bg-[#1b2e4b] ${active2 === '2' ? '!text-warning' : ''}`}
                                        onClick={() => togglePara2('2')}
                                    >
                                        <IconFolder className="ltr:mr-2 rtl:ml-2 text-warning shrink-0" />
                                        <h5 className="font-semibold text-lg dark:text-white-light">Próximas</h5>
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active2 === '2' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active2 === '2' ? 'auto' : 0}>
                                            <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">

                                            </div>
                                        </AnimateHeight>
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

export default Encuestas;

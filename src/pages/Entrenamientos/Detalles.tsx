import Dropdown from '../../components/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import { IRootState } from '../../store';
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconPlus from '../../components/Icon/IconPlus';
import IconPlusCircle from '../../components/Icon/IconPlusCircle';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import IconTag from '../../components/Icon/IconTag';
import IconCalendar from '../../components/Icon/IconCalendar';
import IconEdit from '../../components/Icon/IconEdit';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconX from '../../components/Icon/IconX';

const Scrumboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Scrumboard'));
    });
    const [projectList, setProjectList] = useState<any>([
        {
            id: 1,
            title: 'Próximos',
            tasks: [
                {
                    projectId: 1,
                    id: 1,
                    title: 'Ejercicios con pesas',
                    description: 'Incluye ejercicios como sentadillas, press de banca, y peso muerto.',
                    image: true,
                    date: ' 13 Nov, 2024 09:20',
                    dateEnd: ' 13 Nov, 2024 09:50',
                    tags: ['fuerza'],
                    place:'Piso 4 Ala sur',
                },
                {
                    projectId: 1,
                    id: 2,
                    title: 'Actividades de alta intensidad ',
                    description: 'Ejemplos: correr, ciclismo, remo y saltar la cuerda.',
                    date: ' 13 Nov, 2024 10:00',
                    dateEnd: ' 13 Nov, 2024 10:30',
                    tags: ['intensidad'],
                    place:'PB Ala norte',
                },
            ],
        },
        {
            id: 3,
            title: 'Confirmados',
            tasks: [
                {
                    projectId: 3,
                    id: 4,
                    title: 'Técnicas para mejorar la concentración',
                    description: '',
                    date: ' 10 Nov, 2024 09:20',
                    dateEnd: ' 10 Nov, 2024 09:50',
                    tags: ['fuerza'],
                    place:'Piso 4 Ala sur',
                },
                {
                    projectId: 3,
                    id: 5,
                    title: 'Ejercicios de alta repetición',
                    description: '',
                    date: ' 10 Nov, 2024 10:00',
                    dateEnd: ' 10 Nov, 2024 10:30',
                    tags: ['intensidad'],
                    place:'PB Ala norte',
                },
            ],
        },
        {
            id: 3,
            title: 'Completados',
            tasks: [
                {
                    projectId: 3,
                    id: 4,
                    title: 'Técnicas para mejorar la concentración',
                    description: '',
                    date: ' 10 Nov, 2024',
                },
                {
                    projectId: 3,
                    id: 5,
                    title: 'Ejercicios de alta repetición',
                    description: '',
                    date: ' 10 Nov, 2024',
                },
            ],
        },
    ]);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const changeValue = (e: any) => {
        const { value, id } = e.target;
        setParams({ ...params, [id]: value });
    };
    const [params, setParams] = useState<any>({
        id: null,
        title: '',
    });
    const [paramsTask, setParamsTask] = useState<any>({
        projectId: null,
        id: null,
        title: '',
        description: '',
        tags: '',
        place: '',
        date: '',
    });

    const [selectedTask, setSelectedTask] = useState<any>(null);
    const [isAddProjectModal, setIsAddProjectModal] = useState(false);
    const [isAddTaskModal, setIsAddTaskModal] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);

    const addEditProject = (project: any = null) => {
        setTimeout(() => {
            setParams({
                id: null,
                title: '',
            });
            if (project) {
                let projectData = JSON.parse(JSON.stringify(project));
                setParams(projectData);
            }
            setIsAddProjectModal(true);
        });
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    const saveProject = () => {
        if (!params.title) {
            showMessage('El nombre es requerido.', 'error');
            return false;
        }

        if (params.id) {
            //update project
            const project = projectList.find((d: any) => d.id === params.id);
            project.title = params.title;
        } else {
            //add project
            const lastId = projectList.reduce((max: number, obj: any) => (obj.id > max ? obj.id : max), projectList[0].id) || 0;

            const project = {
                id: lastId + 1,
                title: params.title,
                tasks: [],
            };
            projectList.push(project);
        }

        showMessage('Entrenamiento ha sido guardado exitosamente.');
        setIsAddProjectModal(false);
    };

    const deleteProject = (project: any) => {
        setProjectList(projectList.filter((d: any) => d.id !== project.id));
        showMessage('Entrenamiento ha sido aceptado exitosamente.');
    };

    const clearProjects = (project: any) => {
        setParamsTask((project.tasks = []));
    };

    const addTaskData = (e: any) => {
        const { value, id } = e.target;
        setParamsTask({ ...paramsTask, [id]: value });
    };

    const addEditTask = (projectId: any, task: any = null) => {
        setParamsTask({
            projectId: projectId,
            id: null,
            title: '',
            description: '',
            tags: '',
            date: '',
            place: '',
        });
        if (task) {
            let data = JSON.parse(JSON.stringify(task));
            data.projectId = projectId;
            data.tags = data.tags ? data.tags.toString() : '';
            setParamsTask(data);
        }
        setIsAddTaskModal(true);
    };

    const saveTask = () => {
        if (!paramsTask.title) {
            showMessage('El nombre es requerido.', 'error');
            return false;
        }
        const project: any = projectList.find((d: any) => d.id === paramsTask.projectId);
        if (paramsTask.id) {
            //update task
            const task = project.tasks.find((d: any) => d.id === paramsTask.id);
            task.title = paramsTask.title;
            task.place = paramsTask.place;
            task.description = paramsTask.description;
            task.tags = paramsTask.tags?.length > 0 ? paramsTask.tags.split(',') : [];
        } else {
            //add task
            let maxId = 0;
            maxId = project.tasks?.length ? project.tasks.reduce((max: number, obj: any) => (obj.id > max ? obj.id : max), project.tasks[0].id) : 0;

            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth()); //January is 0!
            const yyyy = today.getFullYear();
            const monthNames: any = ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            const task = {
                projectId: paramsTask.projectId,
                id: maxId + 1,
                title: paramsTask.title,
                description: paramsTask.description,
                date: dd + ' ' + monthNames[mm] + ', ' + yyyy,
                tags: paramsTask.tags?.length > 0 ? paramsTask.tags.split(',') : [],
            };
            setParamsTask(project.tasks.push(task));
        }

        showMessage('El entrenamiento ha sido confirmados exitosamente.');
        setIsAddTaskModal(false);
    };

    const deleteConfirmModal = (projectId: any, task: any = null) => {
        setSelectedTask(task);
        setTimeout(() => {
            setIsDeleteModal(true);
        }, 10);
    };
    const deleteTask = () => {
        let project = projectList.find((d: any) => d.id === selectedTask.projectId);
        project.tasks = project.tasks.filter((d: any) => d.id !== selectedTask.id);
        showMessage('El entrenamiento ha sido eliminado exitosamente.');
        setIsDeleteModal(false);
    };
    const confirmTask = () => {
        let project = projectList.find((d: any) => d.id === selectedTask.projectId);
        project.tasks = project.tasks.filter((d: any) => d.id !== selectedTask.id);
        showMessage('El entrenamiento ha sido aceptado exitosamente.');
        setIsDeleteModal(false);
    };

    return (
        <div>
            <div>
                <button
                    type="button"
                    className="btn btn-primary flex"
                    onClick={() => {
                        addEditProject();
                    }}
                >
                    <IconPlus className="w-5 h-5 ltr:mr-3 rtl:ml-3" />
                    Solicitar entrenamiento
                </button>
            </div>
            {/* project list  */}
            <div className="relative pt-5">
                <div className="perfect-scrollbar h-full">
                    <div className="flex flex-col justify-center items-center gap-5 pb-2">
                        {projectList.map((project: any) => {
                            return (
                                <div key={project.id} className="panel w-80 flex-none" data-group={project.id}>
                                    <div className="flex justify-between mb-5">
                                        <h4 className="text-base font-semibold">{project.title}</h4>
                                    </div>
                                    <ReactSortable
                                        list={project.tasks}
                                        setList={(newState, sortable) => {
                                            if (sortable) {
                                                const groupId: any = sortable.el.closest('[data-group]')?.getAttribute('data-group') || 0;
                                                const newList = projectList.map((task: any) => {
                                                    if (parseInt(task.id) === parseInt(groupId)) {
                                                        task.tasks = newState;
                                                    }

                                                    return task;
                                                });
                                                setProjectList(newList);
                                            }
                                        }}
                                        animation={200}
                                        group={{ name: 'shared', pull: true, put: true }}
                                        ghostClass="sortable-ghost"
                                        dragClass="sortable-drag"
                                        className="connect-sorting-content min-h-[150px]"
                                    >
                                        {project.tasks.map((task: any) => {
                                            return (
                                                <div className="sortable-list " key={project.id + '' + task.id}>
                                                    <div className="shadow bg-[#f4f4f4] dark:bg-white-dark/20 p-3 pb-5 rounded-md mb-5 space-y-3 cursor-move">
                                                        <div className='flex justify-end'>
                                                            <div className="btn px-2 py-1 btn-outline-primary inline-flex justify-end">
                                                                <IconCalendar className="shrink-0" />
                                                                <span className="ltr:ml-2 rtl:mr-2">{task.date}</span>
                                                            </div>
                                                        </div>
                                                        {task.image ? <img src="/assets/images/carousel1.jpeg" alt="images" className="h-32 w-full object-cover rounded-md" /> : ''}

                                                        <div className="text-base font-medium">{task.title}</div>
                                                        <p className="break-all">{task.description}</p>
                                                        {/* <div className="flex gap-2 items-center flex-wrap">
                                                            {task.tags?.length ? (
                                                                task.tags.map((tag: any, i: any) => {
                                                                    return (
                                                                        <div key={i} className="btn px-2 py-1 flex btn-outline-primary">
                                                                            <IconTag className="shrink-0" />
                                                                            <span className="ltr:ml-2 rtl:mr-2">{tag}</span>
                                                                        </div>
                                                                    );
                                                                })
                                                            ) : (
                                                                <div className="btn px-2 py-1 flex text-white-dark dark:border-white-dark/50 shadow-none">
                                                                    <IconTag className="shrink-0" />
                                                                    <span className="ltr:ml-2 rtl:mr-2">No Tags</span>
                                                                </div>
                                                            )}
                                                        </div> */}
                                                        <div className="flex items-center justify-between">
                                                            <div></div>
                                                            <div className="flex items-center">
                                                                {project.title === 'Confirmados' ? (
                                                                    <button type="button" className="btn btn-success btn-sm">
                                                                        Asistiré
                                                                    </button>
                                                                ) : project.title === 'Completados' ? (
                                                                    <button type="button" className="btn btn-info btn-sm" disabled>
                                                                        Completado
                                                                    </button>
                                                                ) : (
                                                                    <>
                                                                        <button onClick={() => deleteConfirmModal(project.id, task)} type="button" className="btn btn-outline-danger btn-sm mr-2">
                                                                            No Asistiré
                                                                        </button>
                                                                        <button onClick={() => addEditTask(project.id, task)} type="button" className="btn btn-outline-success btn-sm">
                                                                            Confirmar
                                                                        </button>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </ReactSortable>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* add project modal */}
            <Transition appear show={isAddProjectModal} as={Fragment}>
                <Dialog as="div" open={isAddProjectModal} onClose={() => setIsAddProjectModal(false)} className="relative z-[51]">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-[999] px-4 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        onClick={() => setIsAddProjectModal(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        {params.id ? 'Editar' : 'Agregar entrenamiento'}
                                    </div>
                                    <div className="p-5">
                                        <form onSubmit={saveProject}>
                                            <div className="grid gap-5">
                                                <div>
                                                    <label htmlFor="title">Nombre</label>
                                                    <input id="title" value={params.title} onChange={changeValue} type="text" className="form-input mt-1" placeholder="Ingresa el nombre" />
                                                </div>
                                            </div>

                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger" onClick={() => setIsAddProjectModal(false)}>
                                                    Cancelar
                                                </button>
                                                <button type="submit" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                    {params.id ? 'Actualizar' : 'Agregar'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* add task modal */}
            <Transition appear show={isAddTaskModal} as={Fragment}>
                <Dialog as="div" open={isAddTaskModal} onClose={() => setIsAddTaskModal(false)} className="relative z-50">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-[999] overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                <button onClick={() => setIsAddTaskModal(false)} type="button" className="absolute top-4 ltr:right-4 rtl:left-4 text-white-dark hover:text-dark">
                                    <IconX />
                                </button>
                                <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">{paramsTask.id ? 'Confirmar' : 'Agregar'}</div>
                                <div className="p-5">
                                    <form onSubmit={saveTask}>
                                        <div className="grid gap-5">
                                            <div>
                                                <label htmlFor="taskTitle">Nombre</label>
                                                <ul className="space-y-3 list-inside list-disc font-semibold">
                                                    <li className="mb-1">{paramsTask.title}</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <label htmlFor="taskTag">Lugar</label>
                                                <ul className="space-y-3 list-inside list-disc font-semibold">
                                                    <li className="mb-1">{paramsTask.place}</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <label htmlFor="taskTag">Fecha y hora (Inicio)</label>
                                                <ul className="space-y-3 list-inside list-disc font-semibold">
                                                    <li className="mb-1">{paramsTask.date}</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <label htmlFor="taskTag">Fecha y hora (Fin)</label>
                                                <ul className="space-y-3 list-inside list-disc font-semibold">
                                                    <li className="mb-1">{paramsTask.dateEnd}</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <label htmlFor="taskdesc">Descripción</label>
                                                <ul className="space-y-3 list-inside list-disc font-semibold">
                                                    <li className="mb-1">{paramsTask.description}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setIsAddTaskModal(false)} type="button" className="btn btn-outline-danger">
                                                No Asistiré
                                            </button>
                                            <button type="submit" className="btn btn-success ltr:ml-4 rtl:mr-4">
                                                {paramsTask.id ? 'Asistiré' : 'Agregar'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* delete task modal */}
            <Transition appear show={isDeleteModal} as={Fragment}>
                <Dialog as="div" open={isDeleteModal} onClose={() => setIsDeleteModal(false)} className="relative z-[51]">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-[999] overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4 ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden md:w-full max-w-lg w-[90%] my-8">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsDeleteModal(false);
                                        }}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-white-dark"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Eliminar entrenamiento</div>
                                    <div className="p-5 text-center">
                                        <div className="text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto">
                                            <IconTrashLines />
                                        </div>
                                        <div className="text-base sm:w-3/4 mx-auto mt-5">¿Estas seguro que desesas eliminar este entrenamiento?</div>

                                        <div className="flex justify-center items-center mt-8">
                                            <button
                                                onClick={() => {
                                                    setIsDeleteModal(false);
                                                }}
                                                type="button"
                                                className="btn btn-outline-danger"
                                            >
                                                Cancel
                                            </button>
                                            <button onClick={deleteTask} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};
export default Scrumboard;

import TaskComplete from '@/assets/completed.svg';
import NoTask from '@/assets/no_task.svg';
import TaskForm from '@/components/TaskForm';
import TaskItem from '@/components/TaskItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type InertiaPageProps, type Task } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface DashboardPageProps {
    tasks: Task[];
}

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const { tasks } = usePage<InertiaPageProps<DashboardPageProps>>().props;

    const pendingTasks = tasks.filter((task: Task) => !task.is_completed);
    const completedTasks = tasks.filter((task: Task) => task.is_completed);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-between">
                        <h2>Tasks</h2>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <button className="bg-custom-violet cursor flex flex-row items-center justify-center gap-2 rounded-sm px-3 py-1 font-bold text-white">
                                    <FaPlus />
                                    Create
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Create New Task</DialogTitle>
                                </DialogHeader>
                                <TaskForm onClose={() => setOpen(false)} />
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {pendingTasks.length > 0 ? (
                            <AnimatePresence mode="popLayout">
                                {pendingTasks.map((task: Task) => (
                                    <TaskItem key={task.id} task={task} />
                                ))}
                            </AnimatePresence>
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center gap-2 p-6 text-center">
                                <img src={NoTask} alt="No Task" className="h-40 w-auto sm:h-52 md:h-64" />
                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-lg font-semibold">No Task Available</h3>
                                    <p className="text-sm text-gray-500">You have tasks? Create one to get started.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2>Completed</h2>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {completedTasks.length > 0 ? (
                            <AnimatePresence mode="popLayout">
                                {completedTasks.map((task: Task) => (
                                    <TaskItem key={task.id} task={task} />
                                ))}
                            </AnimatePresence>
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center gap-2 p-6 text-center">
                                <img src={TaskComplete} alt="Completed" className="h-40 w-auto sm:h-52 md:h-64" />
                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-lg font-semibold">All Tasks Completed</h3>
                                    <p className="text-sm text-gray-500">Great job! You've finished everything for now.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

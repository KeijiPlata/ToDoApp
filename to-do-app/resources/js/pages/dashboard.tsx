import TaskForm from '@/components/TaskForm';
import TaskItem from '@/components/TaskItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AppLayout from '@/layouts/app-layout';
import { type InertiaPageProps, type BreadcrumbItem, type Task } from '@/types';
import { Head, usePage } from '@inertiajs/react';
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
                        {pendingTasks.length > 0 ? pendingTasks.map((task: Task) => <TaskItem key={task.id} task={task} />) : <p>No pending tasks</p>}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2>Completed</h2>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {completedTasks.length > 0 ? (
                            completedTasks.map((task: Task) => <TaskItem key={task.id} task={task} />)
                        ) : (
                            <p>No completed tasks</p>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

import TaskForm from '@/components/TaskForm';
import TaskItem from '@/components/TaskItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { FaPlus } from 'react-icons/fa';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center justify-between">
                        <h2>Tasks</h2>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="flex flex-row items-center justify-center gap-2 rounded-sm bg-[#4F46E5] px-3 py-1 font-bold text-white">
                                    <FaPlus />
                                    Create
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Create New Task</DialogTitle>
                                </DialogHeader>
                                <TaskForm />
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h2>Completed</h2>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

import EditTaskForm from '@/components/EditTaskForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FaCheck, FaEdit, FaTimes, FaTrash } from 'react-icons/fa';

export default function TaskItem({ task }) {
    return (
        <div className="dark:bg-muted flex w-full items-start justify-between rounded-md border bg-white p-4 shadow-sm md:rounded-xl">
            <div className="flex w-full flex-col">
                <div className="flex flex-row items-center justify-between gap-5">
                    <h3 className={`max-w-[75%] text-base font-medium break-all ${task.is_completed ? 'text-muted-foreground line-through' : ''}`}>
                        {task.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="text-muted-foreground hover:text-primary m-0 p-0">
                                    <FaEdit className="text-base" />
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Task</DialogTitle>
                                </DialogHeader>
                                <EditTaskForm task={task} />
                            </DialogContent>
                        </Dialog>

                        <button className="text-muted-foreground hover:text-destructive m-0 p-0">
                            <FaTrash className="text-base" />
                        </button>

                        <button className={`m-0 p-0 ${task.is_completed ? 'text-yellow-600' : 'text-green-600'} hover:opacity-80`}>
                            {task.is_completed ? <FaTimes className="text-base" /> : <FaCheck className="text-base" />}
                        </button>
                    </div>
                </div>
                <p className="text-muted-foreground mt-1 text-sm break-words break-all">{task.description || 'No Description'}</p>
            </div>
        </div>
    );
}

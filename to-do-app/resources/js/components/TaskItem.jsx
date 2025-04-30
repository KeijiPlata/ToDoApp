import EditTaskForm from '@/components/EditTaskForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FaCheck, FaEdit, FaTimes, FaTrash } from 'react-icons/fa';

export default function TaskItem() {
    const sampleTask = {
        id: 1,
        title: 'Finish React Project',
        description: 'Complete all components and test functionality.',
        is_completed: false,
    };

    return (
        <div className="dark:bg-muted mb-2 flex items-start justify-between rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex flex-col">
                <h3 className={`text-base font-medium ${sampleTask.is_completed ? 'text-muted-foreground line-through' : ''}`}>{sampleTask.title}</h3>
                {sampleTask.description && <p className="text-muted-foreground mt-1 text-sm">{sampleTask.description}</p>}
            </div>

            <div className="flex space-x-3">
                <button className="text-muted-foreground hover:text-primary">
                    <Dialog>
                        <DialogTrigger asChild>
                            <FaEdit />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create New Task</DialogTitle>
                            </DialogHeader>
                            <EditTaskForm />
                        </DialogContent>
                    </Dialog>
                </button>
                <button className="text-muted-foreground hover:text-destructive">
                    <FaTrash className="text-base" />
                </button>
                <button className={`${sampleTask.is_completed ? 'text-yellow-600' : 'text-green-600'} hover:opacity-80`}>
                    {sampleTask.is_completed ? <FaTimes className="text-base" /> : <FaCheck className="text-base" />}
                </button>
            </div>
        </div>
    );
}

import { useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { FaSpinner } from 'react-icons/fa';

export default function EditTaskForm({ task, onClose }) {
    const { data, setData, put, processing, errors } = useForm({
        title: task.title || '',
        description: task.description || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('tasks.update', task.id), {
            onSuccess: () => {
                if (onClose) onClose();
                toast.success('Task updated successfully!');
            },
            onError: () => {
                toast.error('There was an error updating the task.');
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-4">
            <div className="grid w-full gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className={errors.title ? 'border-red-500' : ''}
                    placeholder="Enter task title"
                />
                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            </div>

            <div className="grid w-full gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className={errors.description ? 'border-red-500' : ''}
                    placeholder="Enter task description (optional)"
                />
                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
            </div>

            <Button
                type="submit"
                disabled={processing}
                className="bg-custom-violet hover:bg-custom-light-violet cursor-pointer self-end text-white transition-all duration-300"
            >
                {processing ? (
                    <span className="flex items-center gap-2">
                        <FaSpinner className="h-4 w-4 animate-spin" />
                        Saving...
                    </span>
                ) : (
                    'Update Task'
                )}
            </Button>
        </form>
    );
}

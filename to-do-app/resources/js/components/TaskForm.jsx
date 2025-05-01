import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';

export default function TaskForm({ onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('tasks.store'), {
            onSuccess: () => {
                if (onClose) onClose();
                reset();
                toast.success('Task created successfully!');
            },
            onError: () => {
                toast.error('There was an error creating the task.');
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
                        Creating...
                    </span>
                ) : (
                    'Create Task'
                )}
            </Button>
        </form>
    );
}

import { toast } from 'react-toastify';

export class Toasts {
  static info(content: string, title?: string, duration?: number) {
    toast.success(content);
  }

  static success(content: string, title?: string, duration?: number) {
    toast.success(content);
  }

  static warning(content: string, title?: string, duration?: number) {
    toast.warning(content);
  }

  static error(content: string, title?: string, duration?: number) {
    toast.error(content);
  }
}
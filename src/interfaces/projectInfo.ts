import { ImageInfo } from './imageInfo';

interface StackItem {
   name: string;
   items: string[];
}

export interface ProjectInfo {
   name: string;
   images: ImageInfo[]
   description: string;
   stack: StackItem[];
   link?: string;
}

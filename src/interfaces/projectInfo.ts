import { ImageInfo } from './ImageInfo';

interface StackItem {
   name: string;
   items: string[];
}

export interface ProjectInfo {
   name: string;
   images: ImageInfo[]
   description: string;
   stack: StackItem[];
}

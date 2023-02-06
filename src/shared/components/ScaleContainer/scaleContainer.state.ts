import { RecordObject } from '@mv-d/toolbelt';
import { atom } from 'recoil';

export const scaleContainerState = atom<RecordObject<boolean>>({ key: 'scaleContainerState', default: {} });

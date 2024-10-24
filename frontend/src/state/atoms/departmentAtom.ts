import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Department } from '../../models/department';

export const departmentAtom = atomWithStorage<Department[]>("departments", []);
export const getDepartmentsAtom = atom((get) => get(departmentAtom))

export const getDepartmentByIdAtom = atom(
  (get) => (id: number): Department | undefined => {
    const departments = get(departmentAtom);
    return departments.find(dept => dept.id === id);
  }
);

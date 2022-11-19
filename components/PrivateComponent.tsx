import { Enum_Role } from '@prisma/client';
import { useSession } from 'next-auth/react';

interface PrivateComponentProps {
  roleList: Enum_Role[];
  children: JSX.Element;
}

const PrivateComponent = ({ roleList, children }: PrivateComponentProps) => {
  const { data: session } = useSession();

  let roleCheck = false;
  if (session) {
    roleList.forEach(role => {
      if (session?.user?.role === role) {
        roleCheck = true;
      }
    });
  }

  if (roleCheck) {
    return children;
  }
  return null;
};

export default PrivateComponent;

'use client';
interface PageHeaderProps {
  projectName: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ projectName }) => {
  return (
    <div className="bg-gray-100 p-4 shadow-md">
      <h1 className="text-2xl font-bold">{projectName}</h1>
    </div>
  );
};

export default PageHeader;

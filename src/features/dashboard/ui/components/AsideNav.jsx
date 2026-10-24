import React from 'react'

const AsideNav = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 p-4">
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
          Team-sync
        </h1>

        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise workspace
        </p>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        {/* Navigation UI goes here */}
      </div>
    </div>
  );
}

export default AsideNav
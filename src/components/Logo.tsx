import logoImage from 'figma:asset/fd448b9b2989494f7f9c4445b64f6446702667f4.png';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src={logoImage} alt="BookHaven Logo" className="w-12 h-12" />
      <div className="flex flex-col leading-none">
        <h2 className="text-[25px] font-bold text-[#C1CFD6] leading-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          BookHaven
        </h2>
        <span className="text-caption text-[#C1CFD6] mt-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          LITERARY STORE
        </span>
      </div>
    </div>
  );
}
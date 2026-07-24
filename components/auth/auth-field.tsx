type AuthFieldProps = {
  id: string;
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

export function AuthField({
  id,
  label,
  type = "text",
  name,
  placeholder,
  autoComplete,
  required = true,
}: AuthFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-elifoot-orange focus:ring-2 focus:ring-elifoot-orange/30"
      />
    </div>
  );
}

import { FormData } from '../App';
import { Checkbox } from './ui/Checkbox';

interface IntellectualPropertySectionProps {
  data: FormData['intellectualProperty'];
  onChange: (data: FormData['intellectualProperty']) => void;
}

export function IntellectualPropertySection({ data, onChange }: IntellectualPropertySectionProps) {
  const updateField = (field: keyof FormData['intellectualProperty'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        6. Интеллектуальная собственность
      </h2>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="course-rights"
          checked={data.courseRights}
          onChange={(checked) => updateField('courseRights', checked)}
          label="Кому принадлежат права на курс?"
        />
        
        <Checkbox
          id="teacher-contracts"
          checked={data.teacherContracts}
          onChange={(checked) => updateField('teacherContracts', checked)}
          label="Есть ли договоры с преподавателями?"
        />
        
        <Checkbox
          id="exclusive-rights"
          checked={data.exclusiveRights}
          onChange={(checked) => updateField('exclusiveRights', checked)}
          label="Переданы ли исключительные права?"
        />
        
        <Checkbox
          id="trademark-check"
          checked={data.trademarkCheck}
          onChange={(checked) => updateField('trademarkCheck', checked)}
          label="Проверено ли обозначение на конфликт товарных знаков?"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Вывод по блоку:
        </label>
        <textarea
          value={data.conclusion}
          onChange={(e) => updateField('conclusion', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Укажите выводы и рекомендации"
        />
      </div>
    </section>
  );
}

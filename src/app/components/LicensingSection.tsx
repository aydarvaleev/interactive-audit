import { FormData } from '../App';
import { Checkbox } from './ui/Checkbox';

interface LicensingSectionProps {
  data: FormData['licensing'];
  onChange: (data: FormData['licensing']) => void;
}

export function LicensingSection({ data, onChange }: LicensingSectionProps) {
  const updateField = (field: keyof FormData['licensing'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        2. Лицензирование (ст. 91 Закона «Об образовании»)
      </h2>
      
      <div className="space-y-3 mb-6">
        <Checkbox
          id="who-provides"
          checked={data.whoProvides}
          onChange={(checked) => updateField('whoProvides', checked)}
          label="Кто оказывает образовательные услуги?"
        />
        
        <Checkbox
          id="other-teachers"
          checked={data.otherTeachers}
          onChange={(checked) => updateField('otherTeachers', checked)}
          label="Есть ли иные преподаватели?"
        />
        
        <Checkbox
          id="educational-program"
          checked={data.educationalProgram}
          onChange={(checked) => updateField('educationalProgram', checked)}
          label="Используются ли формулировки «образовательная программа»?"
        />
        
        <Checkbox
          id="license-info"
          checked={data.licenseInfo}
          onChange={(checked) => updateField('licenseInfo', checked)}
          label="Указана ли информация о лицензии?"
        />
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-3">Квалификация:</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="qualification"
              value="not-required"
              checked={data.qualification === 'not-required'}
              onChange={(e) => updateField('qualification', e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Лицензия не требуется</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="qualification"
              value="required"
              checked={data.qualification === 'required'}
              onChange={(e) => updateField('qualification', e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Лицензия требуется</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="qualification"
              value="high-risk"
              checked={data.qualification === 'high-risk'}
              onChange={(e) => updateField('qualification', e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Высокий риск лицензирования</span>
          </label>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Формулировка риска:
        </label>
        <textarea
          value={data.riskDescription}
          onChange={(e) => updateField('riskDescription', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Опишите выявленные риски"
        />
      </div>
    </section>
  );
}

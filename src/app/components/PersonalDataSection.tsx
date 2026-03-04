import { FormData } from '../App';
import { Checkbox } from './ui/Checkbox';

interface PersonalDataSectionProps {
  data: FormData['personalData'];
  onChange: (data: FormData['personalData']) => void;
}

export function PersonalDataSection({ data, onChange }: PersonalDataSectionProps) {
  const updateField = (field: keyof FormData['personalData'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        5. Персональные данные (ст. 9 ФЗ-152)
      </h2>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="has-policy"
          checked={data.hasPolicy}
          onChange={(checked) => updateField('hasPolicy', checked)}
          label="Есть ли политика обработки ПД?"
        />
        
        <Checkbox
          id="has-consent"
          checked={data.hasConsent}
          onChange={(checked) => updateField('hasConsent', checked)}
          label="Есть ли согласие на обработку?"
        />
        
        <Checkbox
          id="has-marketing-consent"
          checked={data.hasMarketingConsent}
          onChange={(checked) => updateField('hasMarketingConsent', checked)}
          label="Есть ли отдельное согласие на рекламу?"
        />
        
        <Checkbox
          id="no-default-checkbox"
          checked={data.noDefaultCheckbox}
          onChange={(checked) => updateField('noDefaultCheckbox', checked)}
          label="Нет ли галочки по умолчанию?"
        />
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

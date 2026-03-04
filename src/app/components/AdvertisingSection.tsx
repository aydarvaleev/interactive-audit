import { FormData } from '../App';
import { Checkbox } from './ui/Checkbox';

interface AdvertisingSectionProps {
  data: FormData['advertising'];
  onChange: (data: FormData['advertising']) => void;
}

export function AdvertisingSection({ data, onChange }: AdvertisingSectionProps) {
  const updateField = (field: keyof FormData['advertising'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        4. Реклама (ст. 5 Закона о рекламе)
      </h2>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="income-promises"
          checked={data.incomePromises}
          onChange={(checked) => updateField('incomePromises', checked)}
          label="Есть ли обещания дохода?"
        />
        
        <Checkbox
          id="result-guarantees"
          checked={data.resultGuarantees}
          onChange={(checked) => updateField('resultGuarantees', checked)}
          label="Есть ли гарантии результата?"
        />
        
        <Checkbox
          id="cases-without-warnings"
          checked={data.casesWithoutWarnings}
          onChange={(checked) => updateField('casesWithoutWarnings', checked)}
          label="Используются ли кейсы без оговорок?"
        />
        
        <Checkbox
          id="review-consent"
          checked={data.reviewConsent}
          onChange={(checked) => updateField('reviewConsent', checked)}
          label="Есть ли согласие на публикацию отзывов?"
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

import { FormData } from '../App';
import { Checkbox } from './ui/Checkbox';

interface OfferSectionProps {
  data: FormData['offer'];
  onChange: (data: FormData['offer']) => void;
}

export function OfferSection({ data, onChange }: OfferSectionProps) {
  const updateField = (field: keyof FormData['offer'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        3. Публичная оферта и возвраты
      </h2>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="has-offer"
          checked={data.hasOffer}
          onChange={(checked) => updateField('hasOffer', checked)}
          label="Есть ли публичная оферта?"
        />
        
        <Checkbox
          id="matches-model"
          checked={data.matchesModel}
          onChange={(checked) => updateField('matchesModel', checked)}
          label="Соответствует ли фактической модели?"
        />
        
        <Checkbox
          id="refund-procedure"
          checked={data.refundProcedure}
          onChange={(checked) => updateField('refundProcedure', checked)}
          label="Прописан ли порядок возврата?"
        />
        
        <Checkbox
          id="no-illegal-deductions"
          checked={data.noIllegalDeductions}
          onChange={(checked) => updateField('noIllegalDeductions', checked)}
          label="Нет ли незаконных удержаний?"
        />
        
        <Checkbox
          id="no-result-guarantee"
          checked={data.noResultGuarantee}
          onChange={(checked) => updateField('noResultGuarantee', checked)}
          label="Нет ли гарантии результата?"
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

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PassportSection } from './components/PassportSection';
import { LicensingSection } from './components/LicensingSection';
import { OfferSection } from './components/OfferSection';
import { AdvertisingSection } from './components/AdvertisingSection';
import { PersonalDataSection } from './components/PersonalDataSection';
import { IntellectualPropertySection } from './components/IntellectualPropertySection';
import { RiskTableSection } from './components/RiskTableSection';
import { ConclusionSection } from './components/ConclusionSection';
import { ActionButtons } from './components/ActionButtons';
import { ReferenceGuide } from './components/ReferenceGuide';

export interface FormData {
  // Паспорт проекта
  projectName: string;
  organizationForm: string;
  ogrnInn: string;
  region: string;
  businessModel: string;
  
  // Лицензирование
  licensing: {
    whoProvides: boolean;
    otherTeachers: boolean;
    educationalProgram: boolean;
    licenseInfo: boolean;
    qualification: 'not-required' | 'required' | 'high-risk' | '';
    riskDescription: string;
  };
  
  // Публичная оферта
  offer: {
    hasOffer: boolean;
    matchesModel: boolean;
    refundProcedure: boolean;
    noIllegalDeductions: boolean;
    noResultGuarantee: boolean;
    conclusion: string;
  };
  
  // Реклама
  advertising: {
    incomePromises: boolean;
    resultGuarantees: boolean;
    casesWithoutWarnings: boolean;
    reviewConsent: boolean;
    riskDescription: string;
  };
  
  // Персональные данные
  personalData: {
    hasPolicy: boolean;
    hasConsent: boolean;
    hasMarketingConsent: boolean;
    noDefaultCheckbox: boolean;
    riskDescription: string;
  };
  
  // Интеллектуальная собственность
  intellectualProperty: {
    courseRights: boolean;
    teacherContracts: boolean;
    exclusiveRights: boolean;
    trademarkCheck: boolean;
    conclusion: string;
  };
  
  // Таблица рисков
  risks: Array<{
    risk: string;
    norm: string;
    level: string;
    consequences: string;
    recommendation: string;
  }>;
}

const initialFormData: FormData = {
  projectName: '',
  organizationForm: '',
  ogrnInn: '',
  region: '',
  businessModel: '',
  licensing: {
    whoProvides: false,
    otherTeachers: false,
    educationalProgram: false,
    licenseInfo: false,
    qualification: '',
    riskDescription: '',
  },
  offer: {
    hasOffer: false,
    matchesModel: false,
    refundProcedure: false,
    noIllegalDeductions: false,
    noResultGuarantee: false,
    conclusion: '',
  },
  advertising: {
    incomePromises: false,
    resultGuarantees: false,
    casesWithoutWarnings: false,
    reviewConsent: false,
    riskDescription: '',
  },
  personalData: {
    hasPolicy: false,
    hasConsent: false,
    hasMarketingConsent: false,
    noDefaultCheckbox: false,
    riskDescription: '',
  },
  intellectualProperty: {
    courseRights: false,
    teacherContracts: false,
    exclusiveRights: false,
    trademarkCheck: false,
    conclusion: '',
  },
  risks: [],
};

export default function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Загрузка данных из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem('legal-audit-data');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка при загрузке данных:', e);
      }
    }
  }, []);

  // Автоматическое сохранение при изменении данных
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('legal-audit-data', JSON.stringify(formData));
    }, 500);
    return () => clearTimeout(timer);
  }, [formData]);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleClear = () => {
    if (confirm('Вы уверены, что хотите очистить все данные?')) {
      setFormData(initialFormData);
      localStorage.removeItem('legal-audit-data');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 py-8 print:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Левая колонка - Интерактивная форма */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 print:shadow-none">
              <PassportSection 
                data={formData}
                onChange={updateFormData}
              />
              
              <LicensingSection 
                data={formData.licensing}
                onChange={(licensing) => updateFormData({ licensing })}
              />
              
              <OfferSection 
                data={formData.offer}
                onChange={(offer) => updateFormData({ offer })}
              />
              
              <AdvertisingSection 
                data={formData.advertising}
                onChange={(advertising) => updateFormData({ advertising })}
              />
              
              <PersonalDataSection 
                data={formData.personalData}
                onChange={(personalData) => updateFormData({ personalData })}
              />
              
              <IntellectualPropertySection 
                data={formData.intellectualProperty}
                onChange={(intellectualProperty) => updateFormData({ intellectualProperty })}
              />
              
              <RiskTableSection 
                risks={formData.risks}
                onChange={(risks) => updateFormData({ risks })}
              />
              
              <ConclusionSection />
            </div>
            
            <ActionButtons 
              onClear={handleClear}
              onPrint={handlePrint}
            />
          </div>
          
          {/* Правая колонка - Справочная методичка */}
          <ReferenceGuide />
        </div>
      </main>
    </div>
  );
}
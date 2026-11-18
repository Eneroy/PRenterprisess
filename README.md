# PR ENTERPRISES | 3D Solar EPC & Business Management Platform

A production-ready, full-stack 3D Solar EPC (Engineering, Procurement, and Construction) website and enterprise business management platform built for **PR ENTERPRISES**, an Indian clean energy company specializing in residential, commercial, and industrial rooftop solar systems.

---

## 🌟 Platform Highlights

### 1. Brand Identity & Design System
- **Colors**: Deep Solar Green (`#0b3b24`, `#0f5333`), Architectural Charcoal (`#12171c`, `#1c242b`), Solar Amber / Yellow (`#f59e0b`, `#fbbf24`), and Crisp Pure White.
- **Typography & Aesthetics**: Modern responsive layout, high contrast badges, smooth transitions, real-time energy flow animations.
- **Indian Market Fit**: Direct compliance with **PM Surya Ghar: Muft Bijli Yojana** (up to ₹78,000 DBT Central Subsidy), DISCOM Net-Metering regulations, ALMM Tier-1 modules (Waaree, Adani, Tata Power), and composite 13.8% solar GST accounting.

### 2. Interactive 3D Solar Designer (Three.js & React Three Fiber)
- **3D House & Industrial Building Models**:
  - Flat RCC Concrete Roof with realistic parapet walls.
  - Sloped Tiled Gable Roof.
  - Industrial Curved Corrugated Sheet Shed.
- **Dynamic Parametric Dimensions**: User-controlled length (6m to 35m) and width (4m to 25m) with live area calculation in sq.m and sq.ft.
- **Photovoltaic Layout Engine**:
  - Portrait and Landscape array orientation.
  - Adjustable tilt angle (10° to 35°).
  - Auto-Fit Array algorithm respecting usable roof boundary limits.
- **Real-Time Sun & Shadow Simulation**:
  - Interactive Sun Azimuth slider (90° East to 270° West, with 180° True South indicator).
  - Sun Elevation slider (15° to 80° for seasonal time-of-day shadow analysis).
  - Ray-traced shadow casting from water tanks, stairwell mumties, and HVAC units.
- **Engineering Sizing & Financial Engine**:
  - System capacity (kWp) calculation based on Tier-1 panel wattage (540W to 550W).
  - Daily, monthly, and yearly kWh generation benchmarks.
  - Inverter sizing (Sungrow, Growatt, Solis) and optional Lithium Ferro Phosphate (LFP) battery storage.
  - PM Surya Ghar central subsidy deductions and net investment payback period (ROI ~26.5%).
  - Environmental carbon offsets (Tons CO2 and trees planted).
- **Export & CRM Integration**:
  - One-click **PDF Proposal Generator** containing technical specs, 3D arrangement details, bill of materials, and mandatory engineering disclaimers.
  - Save directly into the CRM pipeline with customer contact and address.

### 3. Comprehensive Public Website
- **Home**: Hero section with interactive rotating 3D solar house, live generation stats, interactive solar savings calculator, solutions showcase, featured project portfolio, and consultation booking.
- **About Us**: Company history, vision, mission, MNRE Channel Partner credentials, and ISO 9001:2015 certifications.
- **Residential Solar**: Dedicated rooftop solar guide, elevated structure terrace usability, and PM Surya Ghar subsidy slab breakdown.
- **Commercial & Industrial (C&I)**: 40% Accelerated Depreciation tax benefits (Section 32), CAPEX vs OPEX models, and corporate tariff reduction.
- **Solar Products**: Complete catalogue of ALMM panels, on-grid & hybrid inverters, LFP lithium batteries, and HDG structures with instant RFQ quotation request modal.
- **3D Solar Designer**: Flagship dedicated 3D CAD simulation studio (`/solar-designer`).
- **Our Projects**: Commissioned projects with real capacity metrics (kWp/MWp), locations, and generation logs.
- **Dealer Registration**: Channel partner onboarding with commission tiers (Silver, Gold, Platinum).
- **Customer Support**: Service complaint ticketing (inverter fault codes, panel cleaning) and 25-year warranty lookup.
- **Contact Us**: Corporate HQ Delhi, regional branches (Mumbai, Ahmedabad, Bengaluru), Google Maps, WhatsApp chat, and click-to-call.

### 4. Admin Portal & Business Management Platform (`/admin`)
- **Executive Overview Dashboard**: 14 dynamic metric widgets calculated from actual records:
  - Total Leads, New Enquiries, Contacted Leads, Site Surveys, Quotations Sent, Won Deals, Lost Deals, Total Customers, Monthly Sales Collections, Outstanding Payments, Expenses, Estimated Gross Profit, Active Installations, Inventory Alerts, and Pending Follow-ups.
- **CRM & Lead Pipeline**:
  - Full lead capture from all website forms.
  - Pipeline stages: `New` → `Contacted` → `Site Survey` → `Quotation Sent` → `Negotiation` → `Won/Lost` → `Installation` → `Completed`.
  - Duplicate detection by phone number and email.
  - Activity log history and call notes.
  - Table and Kanban views with CSV export.
- **Site Survey Management**:
  - Roof dimensions, azimuth, tilt, obstacle records, transformer distance, earthing pit feasibility, and surveyor engineer dispatching.
- **3D Solar Designs Directory**:
  - Stored CAD layouts linked to customer proposals with one-click PDF proposal generation.
- **Quotations & GST Invoicing**:
  - Create itemized solar proposals (modules, inverters, structures, cables, installation labor, liaisoning).
  - Indian composite solar GST (13.8%) and subsidy deductions.
  - Instant branded PDF quotation generation via jsPDF.
- **Inventory & Warehouse**:
  - Product stock levels, min-level safety stock thresholds, low-stock reorder triggers, and quick stock adjustment controls.
- **Installation Execution**:
  - Project milestone checklist (Material Dispatched → Structure Erected → Panels Mounted → Inverter & Wiring → Testing & Earthing → Discom Net Meter Inspection → Commissioned).
- **Finance & Profitability**:
  - Customer payment receipts (advance booking, material dispatch, commissioning).
  - Operational expense logging and net gross profit reporting.
- **Channel Partner / Dealer Network**:
  - Empanelled distributors, commission rates (3% to 5%), referrals, and sales volume.
- **Employee Roster & RBAC**:
  - Role-based permissions: Super Admin, Sales Manager, Sales Executive, Project Manager, Inventory Manager, Accountant, Technician, Dealer.
- **Service & Warranties**:
  - Customer ticket resolution and 30-year module / 10-year inverter warranty records.
- **Automations & Meta WhatsApp Cloud API**:
  - Automated trigger rules and live Meta WhatsApp Business API integration.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ or v20+
- npm or pnpm

### Installation
```bash
# Clone or navigate to project directory
cd "c:\Users\shubh\Downloads\PR ENT WBISTE"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the public website and [http://localhost:3000/admin](http://localhost:3000/admin) to view the Admin Portal.

---

## 🗄️ Database & Supabase Integration

The repository includes complete SQL schema migrations located at:
`supabase/migrations/20261114_init_solar_platform.sql`

It creates all 22 tables with foreign keys, indexes, triggers, and Row Level Security (RLS) policies:
1. `user_roles`
2. `users`
3. `leads`
4. `lead_activities`
5. `customers`
6. `site_surveys`
7. `solar_designs`
8. `products`
9. `suppliers`
10. `purchase_orders`
11. `quotations`
12. `quotation_items`
13. `installations`
14. `payments`
15. `expenses`
16. `dealers`
17. `service_requests`
18. `warranties`
19. `notifications`

### Offline & Demo Resilience
When Supabase environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) are not configured, the platform automatically utilizes a synchronized reactive local storage engine with pre-seeded demo data, ensuring 100% of the platform's buttons, calculators, 3D designer, CRM pipeline, and PDF generation work right out of the box!

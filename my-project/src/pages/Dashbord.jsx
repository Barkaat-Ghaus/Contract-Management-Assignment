import React from "react";

function Dashboard() {
  return (
    <>
      {/* Timeline */}
          <div className="bg-white border-b border-slate-100 px-8 py-6 shrink-0">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Contract Lifecycle Timeline</p>
            <div className="flex gap-2 mb-2">
              <div className="step-bar bg-drafting flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider">Drafting</div>
              <div className="step-bar bg-review flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider">Review</div>
              <div className="step-bar bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sent</div>
              <div className="step-bar bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">Signed</div>
              <div className="step-bar bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">Locked</div>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="flex-1 overflow-x-auto p-8 custom-scrollbar bg-slate-50/50">
            <div className="flex gap-8 h-full min-w-max items-start">
              {/* Drafting Column */}
              <div className="kanban-column">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-drafting"></span>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Drafting</h3>
                  <span className="ml-auto text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-100">2</span>
                </div>
                <div className="space-y-4">
                  <div className="minimal-card">
                    <h4 className="font-bold text-slate-900 mb-3">Q3 Partner MSA</h4>
                    <div className="mb-3">
                      <div className="field-indicator bg-orange-50 text-orange-600">
                        <span className="material-symbols-outlined text-sm!">edit_square</span>
                        <span>14/24 Fields Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Column */}
              <div className="kanban-column">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-review"></span>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Review</h3>
                  <span className="ml-auto text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-100">2</span>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Dashboard;

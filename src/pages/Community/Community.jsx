/**
 * Community.jsx — Community Dashboard page.
 *
 * This page reads all submitted complaints from localStorage and displays them
 * in a searchable, filterable list. It also shows basic statistics at the top
 * so users can see the overall picture of complaints across Kenya.
 *
 * Data flow:
 *   localStorage → getComplaints() → displayed in this page
 *   User submits a complaint → saved by SubmitComplaint → appears here on next load
 */

import React, { useState, useMemo } from 'react';
import { getComplaints, CATEGORY_TO_LABEL } from '../../utils/voicee';
import './community.css';

function Community({ navigate }) {

  // Read all complaints from localStorage once when the page loads.
  // useMemo prevents re-reading on every re-render (performance).
  const allComplaints = useMemo(() => getComplaints(), []);

  // Tracks the currently selected category filter. Empty string means "show all".
  const [activeFilter, setActiveFilter] = useState('');

  // Tracks the text typed into the search box
  const [searchText, setSearchText] = useState('');

  // Build the list of categories that actually appear in the complaints data.
  // We only show filter buttons for categories that have at least one complaint.
  const usedCategories = useMemo(() => {
    const seen = new Set();
    allComplaints.forEach((c) => {
      if (c.category) seen.add(c.category);
    });
    return Array.from(seen);
  }, [allComplaints]);

  // Apply category filter and search text to produce the visible complaint list
  const filtered = useMemo(() => {
    return allComplaints.filter((c) => {
      // Category filter: skip if a filter is active and this complaint doesn't match
      const matchCat = !activeFilter || c.category === activeFilter;

      // Search filter: check title, county, and department for the search text
      const lower = searchText.toLowerCase();
      const matchSearch =
        !searchText ||
        c.title?.toLowerCase().includes(lower) ||
        c.county?.toLowerCase().includes(lower) ||
        c.department?.toLowerCase().includes(lower) ||
        c.categoryLabel?.toLowerCase().includes(lower);

      return matchCat && matchSearch;
    });
  }, [allComplaints, activeFilter, searchText]);

  // --- Statistics derived from all complaints ---

  // Total number of complaints stored
  const totalComplaints = allComplaints.length;

  // Count how many complaints have been resolved
  const resolvedCount = allComplaints.filter((c) => c.status === 'Resolved').length;

  // Count how many different counties appear in the data
  const countiesCount = new Set(allComplaints.map((c) => c.county).filter(Boolean)).size;

  // Count how many different complaint categories appear
  const categoriesCount = new Set(allComplaints.map((c) => c.category).filter(Boolean)).size;

  /**
   * Returns the CSS class name for the status badge colour.
   * Green = Resolved, Yellow = Under Review, Blue = Submitted.
   */
  function getStatusClass(status) {
    if (status === 'Resolved')     return 'community-status-resolved';
    if (status === 'Under Review') return 'community-status-review';
    return 'community-status-submitted';
  }

  return (
    <div className="voicee-community-page">

      <main className="community-main">
        <div className="community-content-wrapper">

          {/* ── PAGE HEADER ──────────────────────────────── */}
          <div className="community-page-header">

            <div className="community-header-text">
              <h1>Community Dashboard</h1>
              <p>See what issues Kenyans are raising and follow public complaints.</p>
            </div>

            <button
              className="community-submit-btn"
              onClick={() => navigate('submit')}
            >
              Submit a Complaint →
            </button>

          </div>

          {/* ── STATISTICS ROW ───────────────────────────── */}
          {/* Four quick-stat cards at the top of the page */}
          <div className="community-stats-row">

            <div className="community-stat-card">
              <span className="community-stat-label">Total Complaints</span>
              <span className="community-stat-value">{totalComplaints}</span>
            </div>

            <div className="community-stat-card">
              <span className="community-stat-label">Resolved</span>
              <span className="community-stat-value community-stat-green">{resolvedCount}</span>
            </div>

            <div className="community-stat-card">
              <span className="community-stat-label">Counties Represented</span>
              <span className="community-stat-value">{countiesCount}</span>
            </div>

            <div className="community-stat-card">
              <span className="community-stat-label">Categories Active</span>
              <span className="community-stat-value">{categoriesCount}</span>
            </div>

          </div>

          {/* ── FILTER + SEARCH BAR ──────────────────────── */}
          <div className="community-controls">

            {/* Category filter buttons — one for each category in the data */}
            <div className="community-filters">

              {/* "All" button shows all complaints regardless of category */}
              <button
                className={`community-filter-btn${activeFilter === '' ? ' active' : ''}`}
                onClick={() => setActiveFilter('')}
              >
                All
              </button>

              {/* One filter button per category found in the complaints */}
              {usedCategories.map((cat) => (
                <button
                  key={cat}
                  className={`community-filter-btn${activeFilter === cat ? ' active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {CATEGORY_TO_LABEL[cat] || cat}
                </button>
              ))}

            </div>

            {/* Search box — filters complaints by title, county, or department */}
            <input
              className="community-search"
              type="text"
              placeholder="Search complaints, counties, departments…"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              aria-label="Search complaints"
            />

          </div>

          {/* ── COMPLAINTS LIST ──────────────────────────── */}
          {filtered.length === 0 ? (

            // Empty state: shown when no complaints match the current filter/search
            <div className="community-empty">
              <p className="community-empty-title">No complaints found.</p>
              <p className="community-empty-sub">
                {searchText || activeFilter
                  ? 'Try a different search or clear the filter.'
                  : 'Be the first to raise an issue.'}
              </p>
              <button
                className="community-empty-btn"
                onClick={() => navigate('submit')}
              >
                Submit a Complaint →
              </button>
            </div>

          ) : (

            // Complaint cards — one per matching complaint
            <div className="community-list">

              {filtered.map((complaint) => (
                <article
                  key={complaint.id}
                  className="community-complaint-card"
                  // Clicking a card navigates to the Complaint Details page
                  onClick={() => navigate('complaint-details')}
                  // Keyboard accessibility: Enter key also activates the card
                  onKeyDown={(e) => e.key === 'Enter' && navigate('complaint-details')}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for: ${complaint.title}`}
                >

                  <div className="community-complaint-main">

                    {/* Top row: status badge and reference number */}
                    <div className="community-complaint-top">
                      <span className={`community-status ${getStatusClass(complaint.status)}`}>
                        {complaint.status || 'Submitted'}
                      </span>
                      <span className="community-complaint-ref">{complaint.id}</span>
                    </div>

                    {/* Complaint title */}
                    <h3 className="community-complaint-title">{complaint.title}</h3>

                    {/* Meta: county, category, date */}
                    <div className="community-complaint-meta">
                      <span>{complaint.county || 'Kenya'}</span>
                      <span className="community-meta-dot">•</span>
                      <span>{complaint.categoryLabel || CATEGORY_TO_LABEL[complaint.category] || complaint.category}</span>
                      <span className="community-meta-dot">•</span>
                      <span>{complaint.dateSubmitted}</span>
                    </div>

                    {/* Department the complaint was routed to */}
                    <p className="community-complaint-dept">{complaint.department}</p>

                  </div>

                  {/* Right side: support count and chevron arrow */}
                  <div className="community-complaint-right">
                    <span className="community-complaint-votes">
                      ♧ {complaint.supportCount || 0}
                    </span>
                    <span className="community-complaint-arrow" aria-hidden="true">›</span>
                  </div>

                </article>
              ))}

            </div>

          )}

        </div>
      </main>

    </div>
  );
}

export default Community;
